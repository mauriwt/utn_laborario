import { Routes, RouterModule } from '@angular/router';
import { OrdenadorComponent } from './ordenador/ordenador.component';
import { MarcaOrdenadorComponent } from './marca-ordenador/marca-ordenador.component';
export const ordenadorRoutes: Routes = [
     // Estas son las sub rutas de modulo ordenador las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: OrdenadorComponent,
        data: {
            pageTitle: 'Lista de ordenador'
        },        
    },   
    {
        path: 'marca',
        component: MarcaOrdenadorComponent,
        data: {
            pageTitle: 'Marca de ordenador'
        },        
    },
    
];

export const ordenadorRouting = RouterModule.forChild(ordenadorRoutes);

