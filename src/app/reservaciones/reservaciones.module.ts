import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { reservacionesRouting} from './reservaciones.routing';
import { ObservableNodeService, CRUDService, AlertasService ,GenericoService} from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * Inportaciones de ngx-Bootstrap
 */
import { TypeaheadModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,  
    reservacionesRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule,
    TypeaheadModule.forRoot(),
  ],
  declarations: [ReservacionesComponent],
    providers: [ObservableNodeService, CRUDService, AlertasService,GenericoService]
})
export class ReservacionesModule { }
