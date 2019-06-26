import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenadorComponent } from './ordenador/ordenador.component';
import { MarcaOrdenadorComponent } from './marca-ordenador/marca-ordenador.component';
import { OrdenadorFromComponent } from './ordenador-from/ordenador-from.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdenadorComponent, MarcaOrdenadorComponent, OrdenadorFromComponent]
})
export class OrdenadorModule { }
