import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { ReservacionesFromComponent } from './reservaciones-from/reservaciones-from.component';
import { reservacionesRouting} from './reservaciones.routing';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,  
    reservacionesRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [ReservacionesComponent, ReservacionesFromComponent],
    providers: [ObservableService, CRUDService, AlertasService]
})
export class ReservacionesModule { }
