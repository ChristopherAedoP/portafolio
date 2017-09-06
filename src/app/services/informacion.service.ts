import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class InformacionService {

  info: any = {} ;
  sobre_nosotro: any = {} ;
  cargada: boolean = false;

  constructor( public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
   }

  public carga_info() {
    this.http.get('./../../assets/data/info.pagina.json')
    .subscribe( data => {
      console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://portafolio-1f681.firebaseio.com/equipo.json')
    .subscribe( data => {
      console.log(data.json());
      this.cargada = true;
      this.sobre_nosotro = data.json();
    });
  }
}
