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
      {path: 'activos', loadChildren: 'app/activos/activos.module#ActivosModule', data:{pageTitle:'lista de Activos'},},
      {path: 'electricos', loadChildren: 'app/electricos/electricos.module#ElectricosModule', data:{pageTitle:'Equipos Electricos'},},
      {path: 'mtsp', loadChildren: 'app/espacio-mant/espacio-mant.module#EspacioMantModule', data:{pageTitle:'espacio/mantenimiento'},},
      {path: 'ordenador', loadChildren: 'app/ordenador/ordenador.module#OrdenadorModule', data:{pageTitle:'Ordenadores'},},
      {path: 'ced', loadChildren: 'app/persona/cardoces.module#CardocesModule', data:{pageTitle:'listado'},},
      {path: 'software', loadChildren: 'app/software/software.module#SoftwareModule', data:{pageTitle:'Software'},},
      {path: 'ubicacion', loadChildren: 'app/ubicacion/ubicacion.module#UbicacionModule', data:{pageTitle:'Ubicacion'},},
      {path: 'prestamos', loadChildren: 'app/prestamos/prestamos.module#PrestamosModule', data:{pageTitle:'Prestamos'},},
      //{path: 'inventarios', loadChildren: 'app/ModuloInventario/inventario.module#InventarioModule',data:{pageTitle: 'Inventarios'}},
      {path: 'parametro', loadChildren: 'app/modulo-parametro/parametro.module#ParametroModule',data:{pageTitle: 'Parametros'},},
    ]
  },
  //{ path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/ModuloAutenticacion/auth.module#AuthModule'},
  //{path: '**', redirectTo: 'auth'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
