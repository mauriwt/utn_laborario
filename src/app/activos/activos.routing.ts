import { Routes, RouterModule } from '@angular/router';
import { ActivosComponent } from './activos/activos.component';

import { CatActivosComponent} from './cat-activos/cat-activos.component';
export const activosRoutes: Routes = [
     // Estas son las sub rutas de modulo activos las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '' ,
        component: ActivosComponent,
        data: {
            pageTitle: 'Lista de activos'
            
        },        
    },   
    {
        path: 'categoria',
        component: CatActivosComponent,
        data: {
            pageTitle: 'Categoria de activos'
        },        
    },
    
];

export const activosRouting = RouterModule.forChild(activosRoutes);

