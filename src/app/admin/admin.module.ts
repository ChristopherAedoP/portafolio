
import { UserService } from './../services/user.service';
import { AdminGuard } from '../services/admin.guard';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// importar componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

// rutas
import { AdminRoutingModule } from './admin.routing';
import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// firebase
import { environment } from './../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

// servicios
import { ProyectosService } from '../services/proyectos.service';
import { EjemploFirebaseComponent } from './components/ejemplo-firebase/ejemplo-firebase.component';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    MainComponent,
    SearchPipe,
    EjemploFirebaseComponent
],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  exports: [
    AddComponent,
    EditComponent,
    ListComponent,
    MainComponent
  ],
  providers: [
    AdminGuard,
    UserService,
    ProyectosService
  ]

})
export class AdminModule {}
