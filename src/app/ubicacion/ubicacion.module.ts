import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbActivoComponent } from './ub-activo/ub-activo.component';
import { UbElectricosComponent } from './ub-electricos/ub-electricos.component';
import { UbOrdenadorComponent } from './ub-ordenador/ub-ordenador.component';
import { UbOrdenadorFromComponent } from './ub-ordenador-from/ub-ordenador-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UbActivoComponent, UbElectricosComponent, UbOrdenadorComponent, UbOrdenadorFromComponent]
})
export class UbicacionModule { }
