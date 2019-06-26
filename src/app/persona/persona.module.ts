import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocentesComponent } from './docentes/docentes.component';
import { DocentesFromComponent } from './docentes-from/docentes-from.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudiantesFromComponent } from './estudiantes-from/estudiantes-from.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CarreraFromComponent } from './carrera-from/carrera-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocentesComponent, DocentesFromComponent, EstudiantesComponent, EstudiantesFromComponent, CarreraComponent, CarreraFromComponent]
})
export class PersonaModule { }
