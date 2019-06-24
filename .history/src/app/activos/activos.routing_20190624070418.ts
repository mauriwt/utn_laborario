import { Routes, RouterModule } from '@angular/router';
import { ActivosComponent } from './activos/activos.component';
import { CatActivosComponent} from './cat-activos/cat-activos.component';
export const parametroRoutes: Routes = [
    {
        path: '',
        component: CatActivosComponent,
        data: {
            pageTitle: 'Lista de categoria de activos'
        },        
    }, 
   
];

export const parametroRouting = RouterModule.forChild(parametroRoutes);

