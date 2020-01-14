import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocentesComponent } from './docentes/docentes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CarreraComponent } from './carrera/carrera.component';
import { cardocesRouting} from './cardoces.routing';
import { ObservableNodeService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrativoComponent } from './administrativo/administrativo.component';

@NgModule({
  imports: [
    CommonModule,
    cardocesRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [DocentesComponent, EstudiantesComponent, CarreraComponent, AdministrativoComponent],
  providers: [ObservableNodeService, CRUDService, AlertasService]
})
export class CardocesModule { }
