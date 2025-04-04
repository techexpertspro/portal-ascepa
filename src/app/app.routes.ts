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
    path: 'about',
    loadComponent: () =>
      import('@portal-ascepa/about').then((c) => c.AboutComponent),
    title: 'Quem Somos | Associação de e para Cegos do Pará',
  },
  {
    path: 'vagas',
    loadComponent: () =>
      import('@portal-ascepa/vacancies').then((m) => m.VacanciesComponent),
    title: 'Vagas | Associação de e para Cegos do Pará',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
