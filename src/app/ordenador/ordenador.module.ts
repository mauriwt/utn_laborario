import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenadorComponent } from './ordenador/ordenador.component';
import { MarcaOrdenadorComponent } from './marca-ordenador/marca-ordenador.component';
import { ordenadorRouting} from './ordenador.routing';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ordenadorRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [OrdenadorComponent, MarcaOrdenadorComponent],
  providers: [ObservableService, CRUDService, AlertasService]
})
export class OrdenadorModule { }
