import { log } from 'util';
import { FileItem } from './../../../models/File-Item';
import { fadeLateral } from './../../animation';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { fadeIn } from './../../../components/animation';


import { ProyectosService } from '../../../services/proyectos.service';
import { Proyecto } from './../../../models/Proyecto';

@Component({
  selector: 'app-edit',
  templateUrl: './../add/add.component.html',
  animations: [fadeLateral]
})
export class EditComponent implements OnInit {
  public title: String;
  // public animal: Animal;
  // public user: User;
  // public identity;
  // public token;
  // public url;
  // public mensaje: String = null;
  // public status: Boolean = false;
  // public files_to_upload: Array<File>;
  public is_edit;
  public proyecto: Proyecto;
  public losArchivos: FileItem[] = [];
  public grabando = false;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,

    public _ps: ProyectosService,
  ) {
    this.title = 'Editar';
    this.is_edit = true;
  }

  ngOnInit() {
    this.getProyecto();


  }
  getProyecto() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      this._ps.getProyecto(id).subscribe(
        response => {
          this.proyecto = response;
          this.proyecto._id = id;
        },
        error => {
          console.error(<any>error);
        }
      );
    });
  }

  onSubmit() {

    this.grabando = true;
    const mypromises: Promise<any>[] = [];

    for (const item of this.losArchivos) {
      mypromises.push(this._ps.subirImagenProyecto(this.proyecto._id, item));
    }

    Promise.all(mypromises).then(
      (data) => {

        for (const item of data) {
          if (item.tipo === 'imgPrincipal') {
            this.proyecto.url_imgPrincipal = item.url;
          } else if (item.tipo === 'imgPrimera') {
            this.proyecto.url_imgPrimera = item.url;
          } else if (item.tipo === 'imgSegunda') {
            this.proyecto.url_imgSegunda = item.url;
          }
        }

        this._ps.updateProyecto(this.proyecto)
          .then(() => {
          console.log('actualiza');
          this.grabando = false;
          this._router.navigate(['/admin-panel/listado']);
        })
        .catch((error) => {
          this.grabando = false;
          console.error(<any>error);
        });

    });
  }

  fileChangeEvent(fileinput: any, tipo: string) {
    for (let i = this.losArchivos.length - 1; i >= 0; i--) {
      if (this.losArchivos[i].tipo === tipo) {
        this.losArchivos.splice(i, 1);
      }
    }
    for (const file of fileinput.target.files) {
      const nuevoArchivo = new FileItem(file);
      nuevoArchivo.tipo = tipo;
      this.losArchivos.push(nuevoArchivo);

    }
  }
}
