import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class InformacionService {

  info: any = {} ;
  equipo: any[] = [] ;
  cargada = false;
  cargada_sobre_nosotros = false;


  constructor( public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
   }

  public carga_info() {
<<<<<<< HEAD
    this.http.get('assets/data/info.pagina.json').subscribe(data => {
=======
    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => {
>>>>>>> 67f6aaf6fd25a6d53bea956dae61238ec3f29956
      // console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://portafolio-1f681.firebaseio.com/equipo.json')
    .subscribe( data => {
      // console.log(data.json());
      this.cargada_sobre_nosotros = true;
      this.equipo = data.json();
    });
  }
}
