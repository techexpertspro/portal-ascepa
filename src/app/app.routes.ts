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
    path: 'noticias',
    loadComponent: () =>
      import('@portal-ascepa/news').then((m) => m.NewsComponent),
    title: 'Notícias | Associação de e para Cegos do Pará',
  },
  {
    path: 'vagas',
    loadComponent: () =>
      import('@portal-ascepa/vacancies').then((m) => m.VacanciesComponent),
    title: 'Vagas | Associação de e para Cegos do Pará',
  },
];
