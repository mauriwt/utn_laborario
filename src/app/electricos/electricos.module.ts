import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectricosComponent } from './electricos/electricos.component';
import { CatElectricosComponent } from './cat-electricos/cat-electricos.component';
import { ElectricosFromComponent } from './electricos-from/electricos-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ElectricosComponent, CatElectricosComponent, ElectricosFromComponent]
})
export class ElectricosModule { }
