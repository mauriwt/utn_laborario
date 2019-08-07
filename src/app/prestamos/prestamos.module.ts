import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prestamosRouting} from './prestamos.routing';
import { ObservableNodeService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrestamosComponent } from './prestamos/prestamos.component';
/**
 * Inportaciones de ngx-Bootstrap
 */
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    prestamosRouting,
    FormsModule,    
    ReactiveFormsModule,
    SmartadminModule,
    TypeaheadModule.forRoot(),
  ],
  declarations: [PrestamosComponent],
  providers: [ObservableNodeService, CRUDService, AlertasService]
})
export class PrestamosModule { }
