import { ProyectosService } from '../../services/proyectos.service';
import { Proyecto } from './../../models/Proyecto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent implements OnInit {
  public proyecto: Proyecto;

  public url_imgPrincipal = '/assets/img/img-loading.gif';

  constructor(private _ar: ActivatedRoute,
    public _ps: ProyectosService) {
    this._ar.params.subscribe(parametros => {
      //  console.log(parametros);
      //   console.log(parametros['id']);

      this._ps.getProyecto(parametros['id']).subscribe(res => {
        this.proyecto = res;
        // this.cod = parametros['id'];
        this.url_imgPrincipal = this.proyecto.url_imgPrincipal;

      });


    });
  }

  ngOnInit() {
  }

}
