import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token/token.component';
import { UserDetaComponent } from './user-deta/user-deta.component';
import { ModulosComponent } from './modulos/modulos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TokenComponent, UserDetaComponent, ModulosComponent]
})
export class ModuloPerfilesModule { }
