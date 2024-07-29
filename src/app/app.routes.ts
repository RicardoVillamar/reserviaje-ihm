import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./features/cliente/perfil/perfil.component').then(
            (c) => c.PerfilComponent
          ),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import(
            './features/cliente/configuracion/configuracion.component'
          ).then((c) => c.ConfiguracionComponent),
      },
      {
        path: 'viajesall',
        loadComponent: () =>
          import('./features/vistas/viajesall/viajesall.component').then(
            (c) => c.ViajesallComponent
          ),
      },
      {
        path: 'detalles',
        loadComponent: () =>
          import('./features/pago/detalles/detalles.component').then(
            (c) => c.DetallesComponent
          ),
      },
      {
        path: 'pasajero',
        loadComponent: () =>
          import('./features/pago/pasajero/pasajero.component').then(
            (c) => c.PasajeroComponent
          ),
      },
      {
        path: 'asiento',
        loadComponent: () =>
          import('./features/pago/asiento/asiento.component').then(
            (c) => c.AsientoComponent
          ),
      },
      {
        path: 'pagar',
        loadComponent: () =>
          import('./features/pago/pagar/pagar.component').then(
            (c) => c.PagarComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./account/register/register.component').then(
            (c) => c.RegisterComponent
          ),
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
