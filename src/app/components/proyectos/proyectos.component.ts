import { Proyecto } from '../../models/Proyecto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {

  public cargando_proyectos = true;
  public proyectos: Proyecto[];
  constructor(public _ps: ProyectosService) {
     _ps.getProyectos().subscribe(
      Response => {
        this.proyectos = <Proyecto[]>Response;
        this.cargando_proyectos = false;
      }
    );
   }

  ngOnInit() {
  }

}
