import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DocentesComponent } from './docentes/docentes.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstudiantesComponent, DocentesComponent, PrestamosComponent, ReservasComponent]
})
export class ModuloRegistroModule { }
