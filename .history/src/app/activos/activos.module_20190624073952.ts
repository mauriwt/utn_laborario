import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {activosRoutes} from './activos.routing';
import { CatActivosComponent } from './activos/cat-activos/cat-activos.component';
import { ActivosComponent } from './activos/activos/activos.component';

@NgModule({
  imports: [
    CommonModule,
    activosRoutes
  ],
  declarations: [
    CatActivosComponent,
    ActivosComponent]
})
export class ActivosModule { }
