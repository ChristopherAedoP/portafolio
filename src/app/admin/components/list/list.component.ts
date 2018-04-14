
import { fadeLateral } from './../../animation';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { fadeIn } from './../../../components/animation';

import { ProyectosService } from '../../../services/proyectos.service';
import { Proyecto } from './../../../models/Proyecto';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  animations: [fadeLateral]
})
export class ListComponent implements OnInit {

  public title: String;
  public proyectos: Proyecto[];

  public proyectoid_delete;
  public busqueda;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _ps: ProyectosService

  ) {

    this.title = 'Listado de proyectos';

  }

  ngOnInit() {

    this.getProyectos();

    $('#myModal').on('show.bs.modal',   (event) => {
      $('#myModal').appendTo('body');
      const button = $(event.relatedTarget);

      const proyectoname = button.data('proyectoname');
      this.proyectoid_delete = button.data('proyectoid');

      $('.proyectoname').text(proyectoname);

    });
  }
  getProyectos() {
    this._ps.getProyectos().subscribe(
      response => {
        this.proyectos = response;
      },
      error => {
        console.error(<any>error);
      }

    );
  }
  deleteProyecto() {

    this._ps.deleteProyecto(this.proyectoid_delete)
      .then(() => {

          this.getProyectos();

      })
      .catch(error => {
        console.error(<any>error);
        alert('Error en el servidor');
      });



  }
}
