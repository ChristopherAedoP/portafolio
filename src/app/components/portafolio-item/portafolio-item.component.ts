import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';



@Component({
  selector: "app-portafolio-item",
  templateUrl: "./portafolio-item.component.html"
})
export class PortafolioItemComponent {

  constructor(private _ar: ActivatedRoute) {
    this._ar.params.subscribe( parametros => {
       console.log(parametros);
        console.log(parametros['id']);
    } );
  }
}
