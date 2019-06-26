import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareComponent } from './software/software.component';
import { SoftwareFromComponent } from './software-from/software-from.component';
import { SoftwareRequerimientosComponent } from './software-requerimientos/software-requerimientos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SoftwareComponent, SoftwareFromComponent, SoftwareRequerimientosComponent]
})
export class SoftwareModule { }
