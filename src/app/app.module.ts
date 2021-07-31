import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitasComponent } from './components/citas/citas.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { BarraComponent } from './components/barra/barra.component';
import { PortadaComponent } from './components/portada/portada.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    ConclusionComponent,
    BarraComponent,
    PortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
