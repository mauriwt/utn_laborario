import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {HomeComponent} from "./home.component";
import { CRUDService, FileUploadService, GenericoService } from 'app/providers';
import {TabPersonaComponent  } from './tabs/tabpersona.component';
import { Tab1Component } from './tabs/contenidos/tab1.component';
import { Tab2Component } from './tabs/contenidos/tab2.component';
import { Tab3Component } from './tabs/contenidos/tab3.component';
import { Tab4Component } from './tabs/contenidos/tab4.component';
import { SaveComponent } from './calendario/save/save.component';
import { BasicWizardWidgetComponent } from './tabs/basic-wizard-widget.component';




@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SmartadminModule,

  
  ],
  declarations: [HomeComponent, TabPersonaComponent, BasicWizardWidgetComponent,
    Tab1Component, Tab2Component, Tab3Component, Tab4Component, SaveComponent],
  providers: [CRUDService, FileUploadService, GenericoService]
})
export class HomeModule { }
