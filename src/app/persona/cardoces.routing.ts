import { Routes, RouterModule } from '@angular/router';
import { DocentesComponent } from './docentes/docentes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CarreraComponent } from './carrera/carrera.component';
export const cardocesRoutes: Routes = [
     // Estas son las sub rutas de modulo cardoces las cuales estarn antepuestas a la ruta principal
     // ubicada en el approuting 
      
    
    {
         path: 'docentes',
        component: DocentesComponent,
        data: {
            pageTitle: 'Listado de docentes'
        },        
    },   
    {
        path: 'estudiantes',
        component: EstudiantesComponent,
        data: {
            pageTitle: 'Listado de estudiantes'
        },        
    },{
        path: 'carrera',
        component: CarreraComponent,
        data: {
            pageTitle: 'Listado de Carreras'
        },        
    },
    
];

export const cardocesRouting = RouterModule.forChild(cardocesRoutes);

