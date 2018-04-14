
import { ServproductosService } from './../../services/servproductos.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: Observable<any[]>;


  constructor(public _sp: ServproductosService) {
    this.productos = _sp.getProductos();
   }

  ngOnInit() {
  }

  getProductos() {

  }
}
