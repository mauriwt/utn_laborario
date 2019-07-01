import { Routes, RouterModule } from '@angular/router';
import { CatElectricosComponent } from './cat-electricos/cat-electricos.component';
import { ElectricosComponent } from './electricos/electricos.component';
export const electricosRoutes: Routes = [
     // Estas son las sub rutas de modulo activos las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: '',
        component: ElectricosComponent,
        data: {
            pageTitle: 'Lista de Equipos Electricos'
        },        
    },   
    {
        path: 'categoria',
        component: CatElectricosComponent,
        data: {
            pageTitle: 'Categoria de Equipos Electricos'
        },        
    },     
    
    
];

export const electricosRouting = RouterModule.forChild(electricosRoutes);

