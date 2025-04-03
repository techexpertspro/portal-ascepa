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
    path: 'noticia/:id',
    loadComponent: () =>
      import('@portal-ascepa/news-detail').then((m) => m.NewsDetailComponent),
    title: 'Detalhes da Noticia | Associação de e para Cegos do Pará',
  },
  {
    loadComponent: () =>
      import('@portal-ascepa/vacancies').then((m) => m.VacanciesComponent),
    title: 'Vagas | Associação de e para Cegos do Pará',
    path: 'vagas',
  },
];
