
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServproductosService {
  productosRef: AngularFireList<any>;
  productos: Observable<any[]>;


  cargando_productos = true;

  private CARPETA_IMAGENES = 'img';

  constructor(private _db: AngularFireDatabase) {
    this.productosRef = _db.list('productos');
  }
  getProductos() {
    this.productos = this.productosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.productos;
  }
  listaUltimasImagen(): AngularFireList<any[]> {
    return this._db.list(`${this.CARPETA_IMAGENES}`);
  }
}
