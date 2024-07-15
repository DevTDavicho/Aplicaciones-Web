import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutosComponent } from './components/autos/autos.component';
import { CrearAutoComponent } from './components/crear-auto/crear-auto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleAutoComponent } from './components/detalle-auto/detalle-auto.component';
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'autos', component: AutosComponent},
  {path: 'guardar-auto', component: CrearAutoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'auto/:id', component: DetalleAutoComponent},
  {path: 'editar-auto/:id', component: EditarAutoComponent},
  {path: '**', component: HomeComponent}
  // {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
