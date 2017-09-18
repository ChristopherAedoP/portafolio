import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';



@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent {

  producto: any= undefined;
  cod: string = undefined;

  constructor(private _ar: ActivatedRoute,
              public _ps: ProductosService) {
    this._ar.params.subscribe( parametros => {
      //  console.log(parametros);
      //   console.log(parametros['id']);

        this._ps.getProducto(parametros['id']).subscribe( res => {
          this.producto = res.json();
          this.cod = parametros['id'];


        });


    } );
  }
}
