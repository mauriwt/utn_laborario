import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { horariosRouting} from './horarios.routing';
import { ObservableNodeService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HorarioComponent } from './horario/horario.component';
import { HorarioCalendarioComponent } from './horario-calendario/horario-calendario.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    horariosRouting,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [HorarioComponent, HorarioCalendarioComponent],
  providers: [ObservableNodeService, CRUDService, AlertasService]
})
export class HorarioModule { }
