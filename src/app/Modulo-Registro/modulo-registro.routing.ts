import { Routes, RouterModule } from '@angular/router';

import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DocentesComponent } from './docentes/docentes.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ReservasComponent } from './reservas/reservas.component';

export const registroRoutes: Routes = [
     // Estas son las sub rutas de modulo activos las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: DocentesComponent,
        data: {
            pageTitle: 'Lista de Equipos registro'
        },        
    },   
    {
        path: 'categoria',
        component: EstudiantesComponent,
        data: {
            pageTitle: 'Categoria de Equipos registro'
        },        
    },     
    
    
];

export const registroRouting = RouterModule.forChild(registroRoutes);

