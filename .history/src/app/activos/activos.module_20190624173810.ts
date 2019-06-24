import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {activosRouting} from './activos.routing';
import { CatActivosComponent } from './cat-activos/cat-activos.component';
import { ActivosComponent } from './activos/activos.component';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivosFromComponent } from './activos-from/activos-from.component';
import { CatActivosFromComponent } from './cat-activos-from/cat-activos-from.component';
@NgModule({
  imports: [
    CommonModule,
    activosRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [CatActivosComponent/* ActivosFromComponent, CatActivosFromComponent**/],
    providers: [ObservableService, CRUDService, AlertasService]
})
export class ActivosModule { }
