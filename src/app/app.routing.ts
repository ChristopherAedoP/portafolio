import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProductosComponent } from './components/productos/productos.component';

import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  PortafolioItemComponent,
  SearchComponent
} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: PortafolioItemComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyecto/:id', component: ProyectoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const App_Routing = RouterModule.forRoot(app_routes , { useHash: true });
