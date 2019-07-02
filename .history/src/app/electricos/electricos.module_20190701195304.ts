import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { electricosRouting} from './electricos.routing';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElectricosComponent } from './electricos/electricos.component';
import { CatElectricosComponent } from './cat-electricos/cat-electricos.component';

@NgModule({
  imports: [
    CommonModule,
    electricosRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [ElectricosComponent, CatElectricosComponent],
  providers: [ObservableService, CRUDService, AlertasService]
})
export class ElectricosModule { }
