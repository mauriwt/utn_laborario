import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { TipoMantenimientoComponent } from './tipo-mantenimiento/tipo-mantenimiento.component';
import { TipoEspacioComponent } from './tipo-espacio/tipo-espacio.component';
import { EspacioComponent } from './espacio/espacio.component';
import { espaciosRouting} from './espacios_mant.routing';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    espaciosRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [MantenimientoComponent, TipoMantenimientoComponent, TipoEspacioComponent, EspacioComponent],
  providers: [ObservableService, CRUDService, AlertasService]
})
export class EspacioMantModule { }
