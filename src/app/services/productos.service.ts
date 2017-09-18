import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando_productos = true;
  constructor(private _http: Http) {

    this.cargar_productos();

   }
   public cargar_productos() {

    this.cargando_productos = true;

    if (this.productos.length === 0 ) {

          this._http
            .get(
              'https://portafolio-1f681.firebaseio.com/productos_idx.json'
            )
            .subscribe(res => {
              //  console.log(res.json());

                     this.productos = res.json();
                     this.cargando_productos = false;

              // setTimeout(() => {
              //                  this.productos = res.json();
              //                  this.cargando_productos = false;
              // }, 1500);

            });

    }

   }
}
