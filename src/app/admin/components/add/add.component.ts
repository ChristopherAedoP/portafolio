

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProyectosService } from '../../../services/proyectos.service';
import { Proyecto } from './../../../models/Proyecto';

import { fadeLateral } from './../../animation';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  animations: [fadeLateral]
})
export class AddComponent implements OnInit {
  public title: String;
  public proyecto: Proyecto;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _sp: ProyectosService
  ) {
    this.title = 'Añadir';
    this.proyecto = new Proyecto('', '', '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {

  }
  onSubmit() {
    const promise = this._sp.addProyecto(this.proyecto);
    promise.then((item) => {
      this._router.navigate(['/admin-panel/listado']);
     });
  }

}
