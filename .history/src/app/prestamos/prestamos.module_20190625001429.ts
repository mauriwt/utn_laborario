import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { PrestamosFromComponent } from './prestamos-from/prestamos-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrestamosComponent, PrestamosFromComponent]
})
export class PrestamosModule { }
