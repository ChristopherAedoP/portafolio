import { resolve } from 'url';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
  productos: any[] = [];
  productos_filtrado: any[] = [];
  cargando_productos = true;

  constructor(private _http: Http) {
    this.cargar_productos();
  }

  public busca_producto(termino: string) {
    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        // termino carga
        this.filtrar_productos(termino);
      });
    }else {
        this.filtrar_productos(termino);
    }


  }
  private filtrar_productos(termino: string ) {
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      // console.log(prod);
      if (prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
      }
    });
  }

  public cargar_productos() {
    this.cargando_productos = true;

    const promesa = new Promise ((resolve , reject ) => {
        if (this.productos.length === 0) {
          this._http
            .get('https://portafolio-1f681.firebaseio.com/productos_idx.json')
            .subscribe(res => {
              this.productos = res.json();
              this.cargando_productos = false;
              resolve();
            });
        }

    });
    return promesa;



  }
  public getProducto(cod: string) {
    return this._http.get(
      `https://portafolio-1f681.firebaseio.com/productos/${cod}.json`
    );
  }
}
