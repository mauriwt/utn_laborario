import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatActivosComponent } from './cat-activos/cat-activos.component';
import { ActivosComponent } from './activos/activos.component';
import { activosRouting} from './activos.routing';
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
  declarations: [ ActivosComponent, CatActivosComponent ],
    providers: [ObservableService, CRUDService, AlertasService]
})
export class ActivosModule { }
