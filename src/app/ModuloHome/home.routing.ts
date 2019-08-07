import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {SaveComponent} from "./calendario/save/save.component";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            pageTitle: 'Migracion'
        }
    },
    {
        path: '',
        component: SaveComponent,
        data: {
            pageTitle: 'Home'
        }
    }
];

export const homeRouting = RouterModule.forChild(homeRoutes);

