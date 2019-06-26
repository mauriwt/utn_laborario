import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioFromComponent } from './horario-from/horario-from.component';
import { HorarioCalendarComponent } from './horario-calendar/horario-calendar.component';
import { HorarioComponent } from './horario/horario.component';
import { HorarioCalendarioComponent } from './horario-calendario/horario-calendario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorarioFromComponent, HorarioCalendarComponent, HorarioComponent, HorarioCalendarioComponent]
})
export class HorarioModule { }
