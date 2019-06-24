import { Routes, RouterModule } from '@angular/router';
import { ActivosComponent } from './activos/activos.component';
import { CatActivosComponent} from './cat-activos/cat-activos.component';
export const activosRoutes: Routes = [
    {
        path: 'cat-activos',
        component: CatActivosComponent,
        data: {
            pageTitle: 'Lista de categoria de activos'
        },        
    }, 
   
];

export const activosRouting = RouterModule.forChild(activosRoutes);

