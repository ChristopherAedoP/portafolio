
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

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const App_Routing = RouterModule.forRoot(app_routes , { useHash: true });
