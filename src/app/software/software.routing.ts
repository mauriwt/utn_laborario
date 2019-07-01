import { Routes, RouterModule } from '@angular/router';
import { SoftwareComponent } from './software/software.component';
import { SoftwareRequerimientosComponent } from './software-requerimientos/software-requerimientos.component';
export const softwareRoutes: Routes = [
     // Estas son las sub rutas de modulo software las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: SoftwareComponent,
        data: {
            pageTitle: 'Lista de software'
        },        
    },   
    {
        path: 'requerimientos',
        component: SoftwareRequerimientosComponent,
        data: {
            pageTitle: 'Requerimientos de software'
        },        
    },
    
];

export const softwareRouting = RouterModule.forChild(softwareRoutes);

