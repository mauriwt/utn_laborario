import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbActivoComponent } from './ub-activo/ub-activo.component';
import { UbElectricosComponent } from './ub-electricos/ub-electricos.component';
import { UbOrdenadorComponent } from './ub-ordenador/ub-ordenador.component';
import { ubicacionRouting} from './ubicacion.routing';
import { ObservableNodeService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ubicacionRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [UbActivoComponent, UbElectricosComponent, UbOrdenadorComponent],
  providers: [ObservableNodeService, CRUDService, AlertasService]
})
export class UbicacionModule { }
