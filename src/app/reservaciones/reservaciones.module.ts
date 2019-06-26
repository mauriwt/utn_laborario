import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { ReservacionesFromComponent } from './reservaciones-from/reservaciones-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservacionesComponent, ReservacionesFromComponent]
})
export class ReservacionesModule { }
