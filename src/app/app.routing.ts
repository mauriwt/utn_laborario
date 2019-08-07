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
        path: '', redirectTo: 'reservas', pathMatch: 'full',
      },
      {path: 'home', loadChildren: 'app/ModuloHome/home.module#HomeModule',data:{pageTitle: 'Home'}, resolve: [AuthResolver] },
      // con esta ruta viene a CatActivosComponent
      {path: 'activos', loadChildren: 'app/activos/activos.module#ActivosModule', data:{pageTitle:'lista de Activos'}, resolve: [AuthResolver]},
      {path: 'electricos', loadChildren: 'app/electricos/electricos.module#ElectricosModule', data:{pageTitle:'Equipos Electricos'},resolve: [AuthResolver]},
      {path: 'mtsp', loadChildren: 'app/espacio-mant/espacio-mant.module#EspacioMantModule', data:{pageTitle:'espacio/mantenimiento'},resolve: [AuthResolver]},
      {path: 'horario', loadChildren: 'app/horario/horario.module#HorarioModule', data:{pageTitle:'Horario'},resolve: [AuthResolver]},
      {path: 'ordenador', loadChildren: 'app/ordenador/ordenador.module#OrdenadorModule', data:{pageTitle:'Ordenadores'},resolve: [AuthResolver]},
      // cdp es el modulo de persona que incluye persona docentes y carrera
      {path: 'cdp', loadChildren: 'app/persona/cardoces.module#CardocesModule', data:{pageTitle:'listado'},resolve: [AuthResolver]},
      {path: 'prestamos', loadChildren: 'app/prestamos/prestamos.module#PrestamosModule', data:{pageTitle:'Prestamos'},resolve: [AuthResolver]},
      {path: 'reservas', loadChildren: 'app/reservaciones/reservaciones.module#ReservacionesModule', data:{pageTitle:'Reservaciones'},resolve: [AuthResolver]},
    
      {path: 'software', loadChildren: 'app/software/software.module#SoftwareModule', data:{pageTitle:'Software'},resolve: [AuthResolver]},
      {path: 'ubicacion', loadChildren: 'app/ubicacion/ubicacion.module#UbicacionModule', data:{pageTitle:'Ubicacion'},resolve: [AuthResolver]},
       
    //  {path: 'activos', loadChildren: 'app/activos/activos.module#ActivosModule', data:{pageTitle:'lista de Activos'}, resolve: [AuthResolver]},
      {path: 'parametro', loadChildren: 'app/modulo-parametro/parametro.module#ParametroModule',data:{pageTitle: 'Parametros'}, resolve: [AuthResolver]},
      //{path: 'inventarios', loadChildren: 'app/ModuloInventario/inventario.module#InventarioModule',data:{pageTitle: 'Inventarios'}},
    ]
  },
  
  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/ModuloAutenticacion/auth.module#AuthModule'},
  {path: '**', redirectTo: 'auth'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
