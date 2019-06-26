import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MantenimientoFromComponent } from './mantenimiento-from/mantenimiento-from.component';
import { TipoMantenimientoComponent } from './tipo-mantenimiento/tipo-mantenimiento.component';
import { TipoEspacioComponent } from './tipo-espacio/tipo-espacio.component';
import { EspacioComponent } from './espacio/espacio.component';
import { EspacioFromComponent } from './espacio-from/espacio-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MantenimientoComponent, MantenimientoFromComponent, TipoMantenimientoComponent, TipoEspacioComponent, EspacioComponent, EspacioFromComponent]
})
export class EspacioMantModule { }
