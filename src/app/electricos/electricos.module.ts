import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { electricosRouting} from './electricos.routing';
import { ObservableNodeService, CRUDService, AlertasService, GenericoService } from 'app/providers';
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
  providers: [ObservableNodeService, CRUDService, AlertasService,GenericoService]
})
export class ElectricosModule { }
