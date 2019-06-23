import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { parametroRouting } from './parametro.routing';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { ObservableService, CRUDService, AlertasService, GenericoService } from 'app/providers';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { ClonarComponent } from './form/clonar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    parametroRouting, 
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaComponent, FormComponent, ClonarComponent],
  providers: [ObservableService, CRUDService, AlertasService, GenericoService]
})
export class ParametroModule { }
