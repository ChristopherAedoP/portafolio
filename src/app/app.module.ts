
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { App_Routing } from './app.routing';

// componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';
import { SearchComponent } from './components/search/search.component';

// servicios
import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';
import { ProductosComponent } from './components/productos/productos.component';
import { ServproductosService } from './services/servproductos.service';


// firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// admin module
import { AdminModule } from './admin/admin.module';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent,
    SearchComponent,
    ProductosComponent,
    ProyectosComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    App_Routing,
    AdminModule

  ],
  providers: [
    InformacionService,
    ProductosService,
    ServproductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
