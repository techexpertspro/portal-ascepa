import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('@portal-ascepa/home').then((m) => m.homeRoutes),
    title: 'Home | Associação de e para Cegos do Pará',
  },
];
