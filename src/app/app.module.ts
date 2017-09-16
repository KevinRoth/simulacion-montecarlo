import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DistribucionesComponent } from './distribuciones/distribuciones.component';
import {DistribucionesService} from "./services/distribuciones.service";

@NgModule({
  declarations: [
    AppComponent,
    DistribucionesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DistribucionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
