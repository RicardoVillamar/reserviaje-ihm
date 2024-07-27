import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component'),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/cliente/perfil/perfil.component'),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./features/cliente/configuracion/configuracion.component'),
      },
      {
        path: 'viajesall',
        loadComponent: () =>
          import('./features/vistas/viajesall/viajesall.component'),
      },
      {
        path: 'detalles',
        loadComponent: () =>
          import('./features/pago/detalles/detalles.component'),
      },
      {
        path: 'pasajero',
        loadComponent: () =>
          import('./features/pago/pasajero/pasajero.component'),
      },
      {
        path: 'asiento',
        loadComponent: () =>
          import('./features/pago/asiento/asiento.component'),
      },
      {
        path: 'pagar',
        loadComponent: () => import('./features/pago/pagar/pagar.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./account/register/register.component'),
      },
      {
        path: 'notfound',
        loadComponent: () =>
          import('./shared/components/notfound/notfound.component'),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'notfound',
  },
];
