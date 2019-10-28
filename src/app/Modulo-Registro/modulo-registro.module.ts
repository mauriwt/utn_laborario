import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SmartadminModule } from "../shared/smartadmin.module";
import { registroRouting } from "./modulo-registro.routing";
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DocentesComponent } from './docentes/docentes.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ReservasComponent } from './reservas/reservas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    registroRouting,
    SmartadminModule
  ],
  declarations: [EstudiantesComponent, DocentesComponent, PrestamosComponent, ReservasComponent]
})
export class ModuloRegistroModule { }
