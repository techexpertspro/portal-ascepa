import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@portal-ascepa/home').then((m) => m.HomeComponent),
    title: 'Home | Associação de e para Cegos do Pará',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('@portal-ascepa/home').then((m) => m.ContactComponent),
    title: 'Contato | Associação de e para Cegos do Pará',
  },
];
