/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";
import { AuthResolver } from './ModuloAutenticacion/auth.resolve';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {path: 'home', loadChildren: 'app/ModuloHome/home.module#HomeModule',data:{pageTitle: 'Home'}, },
      // con esta ruta viene a CatActivosComponent
      {path: 'activos', loadChildren: 'app/activos/activos.module#ActivosModule', data:{pageTitle:'lista de Activos'},}
     // {path: 'parametro', loadChildren: 'app/modulo-parametro/parametro.module#ParametroModule',data:{pageTitle: 'Parametros'}, resolve:[AuthResolver]},
      //{path: 'inventarios', loadChildren: 'app/ModuloInventario/inventario.module#InventarioModule',data:{pageTitle: 'Inventarios'}},
    ]
  },
  //{ path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/ModuloAutenticacion/auth.module#AuthModule'},
  //{path: '**', redirectTo: 'auth'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
