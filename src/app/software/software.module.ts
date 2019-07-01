import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareComponent } from './software/software.component';
import { SoftwareRequerimientosComponent } from './software-requerimientos/software-requerimientos.component';
import { softwareRouting } from './software.routing';
import { ObservableService, CRUDService, AlertasService } from 'app/providers';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    softwareRouting,
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule
  ],
  declarations: [SoftwareComponent, SoftwareRequerimientosComponent],
  providers: [ObservableService, CRUDService, AlertasService]
})
export class SoftwareModule { }
