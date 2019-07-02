import { Routes, RouterModule } from '@angular/router';
import { PrestamosComponent } from './prestamos/prestamos.component';
export const activosRoutes: Routes = [
     // Estas son las sub rutas de modulo activos las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: PrestamosComponent,
        data: {
            pageTitle: 'Prestamos'
        },        
    },
    
];

export const activosRouting = RouterModule.forChild(activosRoutes);

