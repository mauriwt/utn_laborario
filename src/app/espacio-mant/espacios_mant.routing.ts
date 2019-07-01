import { Routes, RouterModule } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { TipoMantenimientoComponent } from './tipo-mantenimiento/tipo-mantenimiento.component';
import { TipoEspacioComponent } from './tipo-espacio/tipo-espacio.component';
import { EspacioComponent } from './espacio/espacio.component';
export const espaciosRoutes: Routes = [
     // Estas son las sub rutas de modulo activos las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: 'mantenimiento',
        component: MantenimientoComponent,
        data: {
            pageTitle: 'Mantenimiento'
        },        
    },   
    {
        path: 'mantenimiento/tipo',
        component: TipoMantenimientoComponent,
        data: {
            pageTitle: 'Tipo de Mantenimiento'
        },        
    }, 
    {
        path: 'espacios',
        component: EspacioComponent,
        data: {
            pageTitle: 'Espacios'
        },        
    },
    {
        path: 'espacios/tipo',
        component: TipoEspacioComponent,
        data: {
            pageTitle: 'Tipo de Espacios'
        },        
    },
    
];

export const espaciosRouting = RouterModule.forChild(espaciosRoutes);

