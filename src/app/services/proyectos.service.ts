import { FileItem } from './../models/File-Item';
import { Proyecto } from '../models/Proyecto';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';


@Injectable()
export class ProyectosService {

  public proyectosRef: AngularFireList<any>;
  public proyectos: Observable<any[]>;

  public imgProyectosRef: AngularFireList<any>;
  public imgProyectos: Observable<any[]>;

  public proyectoRef: AngularFireObject<any>;
  public proyecto: Observable<any>;

  public cargando_productos = true;
  public estaSubiendoImg = false;
  public error = true;
  private CARPETA_IMAGENES = 'img-proyectos';

  constructor(private _db: AngularFireDatabase) {
    this.proyectosRef = _db.list('proyectos');
    //  this.proyectoRef = _db.object('proyectos');
  }

  getProyectos() {
    this.cargando_productos = true;
    this.proyectos = this.proyectosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    return this.proyectos;
  }
  getProyecto(xid: string) {

    this.proyectoRef = this._db.object('proyectos/' + xid);
    this.proyecto = this.proyectoRef.valueChanges();

    return this.proyecto;
  }
  addProyecto(newProyecto: Proyecto) {
    return this.proyectosRef.push(newProyecto);
  }
  updateProyecto(modProyecto: Proyecto) {
    return this.proyectoRef.set(modProyecto);
  }
  deleteProyecto(xid: string) {
    return this.proyectosRef.remove(xid);
  }
//#region Subir imagenes -->

  subirImagenesProyecto(proyecto_key: string, losArchivos: FileItem[]) {

    return new Promise((resolve, reject) => {

      const storageref = firebase.storage().ref();
      let numarchivos = 0;
      for (const item of losArchivos) {
        item.estaSubiendo = true;

        const metadata = {
          contentType: item.archivo.type
        };

        const uploadTask: firebase.storage.UploadTask = storageref
          .child(`${this.CARPETA_IMAGENES}/${item.nombre}`)
          .put(item.archivo, metadata);

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            item.progreso = uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes * 100;
            // const progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            // console.log('Upload :' + item.nombre + ' is ' + progress + '% done');
            // switch (uploadTask.snapshot.state) {
            //   case firebase.storage.TaskState.PAUSED: // or 'paused'
            //     console.log('Upload is paused');
            //     break;
            //   case firebase.storage.TaskState.RUNNING: // or 'running'
            //     console.log('Upload is running');
            //     break;
            // }
          },
          (error) => console.error('error al subir', error),
          () => {

            item.url = uploadTask.snapshot.downloadURL;
            item.estaSubiendo = false;
            const subida = this.guardarImagen({ proyecto_key: proyecto_key, tipo: item.tipo, nombre: item.nombre, url: item.url });
            subida.then(
              () => {

                numarchivos += 1;
                if (numarchivos === losArchivos.length) {
                  resolve('done');
                  return undefined;
                }

              }
            );
          }
        );
      }
    });
  }
  subirImagenProyecto(proyecto_key: String, elArchivo: FileItem) {

    return new Promise((resolve, reject) => {
      const storageref = firebase.storage().ref();

      elArchivo.estaSubiendo = true;
      const metadata = {
        contentType: elArchivo.archivo.type
      };
      const uploadTask: firebase.storage.UploadTask = storageref
        .child(`${this.CARPETA_IMAGENES}/${elArchivo.nombre}`)
        .put(elArchivo.archivo, metadata);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          elArchivo.progreso = uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes * 100;
        },
        (error) => console.error('error al subir', error),
        () => {
          elArchivo.url = uploadTask.snapshot.downloadURL;
          elArchivo.estaSubiendo = false;
          // tslint:disable-next-line:max-line-length
          const subida = this.guardarImagen({ proyecto_key: proyecto_key, tipo: elArchivo.tipo, nombre: elArchivo.nombre, url: elArchivo.url });
          subida.then(
            (res) => {

              resolve(elArchivo);
              return undefined;
            }
          );
        }
      );
    });
  }

  private guardarImagen(imagen: any) {
    return this._db.list(`${this.CARPETA_IMAGENES}`).push(imagen);
  }

  getListaImagenesProyecto(xIdProyecto: string) {
    this.imgProyectosRef = this._db.list('img-proyectos', ref => ref.orderByChild('proyecto_key').equalTo(xIdProyecto));


    this.imgProyectos = this.imgProyectosRef.valueChanges();

    this.imgProyectos.subscribe(
      res => {
        console.log('imgProyectos', res);
      }
    );
    return this.imgProyectos;
  }
//#endregion




}
