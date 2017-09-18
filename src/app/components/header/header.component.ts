import { Router } from '@angular/router';
import { InformacionService } from './../../services/informacion.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public _is: InformacionService,
              private _rt: Router) {}

  buscarProducto(termino: string) {

    console.log(termino);
    if (termino.length > 0 ) {
      this._rt.navigate(['buscar', termino]);
    }

  }
}
