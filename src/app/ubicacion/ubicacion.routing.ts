import { Routes, RouterModule } from '@angular/router';
import { UbActivoComponent } from './ub-activo/ub-activo.component';
import { UbElectricosComponent } from './ub-electricos/ub-electricos.component';
import { UbOrdenadorComponent } from './ub-ordenador/ub-ordenador.component';
export const ubicacionRoutes: Routes = [
     // Estas son las sub rutas de modulo ubicacion las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: 'activo',
        component: UbActivoComponent,
        data: {
            pageTitle: 'Lista de ubicacion'
        },        
    },   
    {
        path: 'electricos',
        component: UbElectricosComponent,
        data: {
            pageTitle: 'Categoria de ubicacion'
        },        
    },{
        path: 'ordenadores',
        component: UbOrdenadorComponent,
        data: {
            pageTitle: 'Ingresar categora de ubicacion'
        },        
    },
    
];

export const ubicacionRouting = RouterModule.forChild(ubicacionRoutes);

