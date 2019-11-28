import { Routes, RouterModule } from '@angular/router';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { ReservacionesFromComponent } from './reservaciones-from/reservaciones-from.component';
export const reservacionesRoutes: Routes = [
     // Estas son las sub rutas de modulo reservaciones las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: ReservacionesComponent,
        data: {
            pageTitle: 'Lista de reservaciones'
        },        
    },   
    {
        path: 'categoria',
        component: ReservacionesFromComponent,
        data: {
            pageTitle: 'Categoria de reservaciones'
        },              
    },
    
];

export const reservacionesRouting = RouterModule.forChild(reservacionesRoutes);

