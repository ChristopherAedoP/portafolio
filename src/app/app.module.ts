import { PortafolioGaleriaComponent } from './components/portafolio/portafolioGaleria.component';
import { ProductoComponent } from './components/portafolio-item/producto.component';

import { HttpModule } from '@angular/http';
import { App_Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent,
    SearchComponent,
    ProductoComponent,
    PortafolioGaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    App_Routing
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
