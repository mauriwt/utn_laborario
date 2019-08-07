import { Routes, RouterModule } from '@angular/router';
import { HorarioComponent } from './horario/horario.component';
import { HorarioCalendarioComponent } from './horario-calendario/horario-calendario.component';
export const horariosRoutes: Routes = [
     // Estas son las sub rutas de modulo horarios las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
          
     {
          path: '',
         component: HorarioCalendarioComponent,
         data: {
             pageTitle: 'Horario'
         },        
     }, 
    
];

export const horariosRouting = RouterModule.forChild(horariosRoutes);

