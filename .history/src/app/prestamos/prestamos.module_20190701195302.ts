import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prestamosRouting} from './prestamos.routing';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrestamosComponent } from './prestamos/prestamos.component';

@NgModule({
  imports: [
    CommonModule,
    prestamosRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [PrestamosComponent],
  providers: [ObservableService, CRUDService, AlertasService]
})
export class PrestamosModule { }
