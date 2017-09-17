import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PrincipalComponent} from './components/principal/principal.component';
import {DistribucionesService} from './services/distribuciones.service';
import {PoliticasService} from "./services/politicas.service";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DistribucionesService,
    PoliticasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
