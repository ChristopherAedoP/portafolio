import { Component} from '@angular/core';

import { ProductosService } from './../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  termino: string = undefined;

  constructor(private _ar: ActivatedRoute, public _ps: ProductosService) {
    this._ar.params.subscribe(parametros => {

      this.termino = parametros['termino'];

      if (this.termino) {
        _ps.busca_producto(this.termino);
      }


    });
  }

}
