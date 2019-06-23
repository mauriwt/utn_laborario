import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { ClonarComponent } from './form/clonar.component';
export const parametroRoutes: Routes = [
    {
        path: '',
        component: ListaComponent,
        data: {
            pageTitle: 'Lista de biométricos'
        },        
    },
    {
        path: 'app/save',
        component: FormComponent,
        data: {
            pageTitle: 'Guardar registro'
        },        
    },
    {
        path: 'save/:codigo',
        component: FormComponent,
        data: {
            pageTitle: 'Editar registro'
        },        
    },
    {
        path: 'clonar',
        component: ClonarComponent,
        data: {
            pageTitle: 'Clonación parcial de datos'
        },        
    },
];

export const parametroRouting = RouterModule.forChild(parametroRoutes);

