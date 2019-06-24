import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {activosRouting} from './activos.routing';
import { CatActivosComponent } from './activos/cat-activos/cat-activos.component';
import { ActivosComponent } from './activos/activos/activos.component';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    activosRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [CatActivosComponent],
    providers: [ObservableService, CRUDService, AlertasService]
})
export class ActivosModule { }
