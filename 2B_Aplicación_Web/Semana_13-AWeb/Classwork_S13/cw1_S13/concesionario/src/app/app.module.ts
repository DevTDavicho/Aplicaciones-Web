import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutosComponent } from './components/autos/autos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearAutoComponent } from './components/crear-auto/crear-auto.component';
import { DetalleAutoComponent } from './components/detalle-auto/detalle-auto.component';
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { PieComponent } from './components/pie/pie.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ContactoComponent,
    CrearAutoComponent,
    DetalleAutoComponent,
    EditarAutoComponent,
    EncabezadoComponent,
    HomeComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
