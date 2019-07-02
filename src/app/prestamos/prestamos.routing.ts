import { Routes, RouterModule } from '@angular/router';
import { PrestamosComponent } from './prestamos/prestamos.component';
export const prestamosRoutes: Routes = [
     // Estas son las sub rutas de modulo prestamos las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: PrestamosComponent,
        data: {
            pageTitle: 'Prestamos'
        },        
    },
    
];

export const prestamosRouting = RouterModule.forChild(prestamosRoutes);

