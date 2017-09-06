
import { Routes, RouterModule } from '@angular/router';
import {  AboutComponent,
          PortafolioComponent,
          PortafolioItemComponent } from './components/index.paginas';

const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: PortafolioItemComponent },

  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const App_Routing = RouterModule.forRoot(app_routes , { useHash: true });
