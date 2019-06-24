import { Routes, RouterModule } from '@angular/router';
import { ActivosComponent } from './activos/activos.component';
import { ActivosFromComponent } from './activos-from/activos-from.component';
import { CatActivosComponent} from './cat-activos/cat-activos.component';
import { CatActivosFromComponent } from './cat-activos-from/cat-activos-from.component';
export const activosRoutes: Routes = [
    {
        path: '',
        component: CatActivosComponent,
        data: {
            pageTitle: 'Categoria de activos'
        },        
    },
    {
        // con esta ruta va a ActivosListComponent pero siempre le antepones (activos/cat) esta por esta dentro de ese Modulo
        path: 'lista',
        component: ActivosComponent,
        data: {
            pageTitle: 'Categoria de activos'
        },        
    }, 
];

export const activosRouting = RouterModule.forChild(activosRoutes);

