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
  {
    path: 'about',
    loadComponent: () =>
      import('@portal-ascepa/about').then((c) => c.AboutComponent),
    title: 'Quem Somos | Associação de e para Cegos do Pará',
  },
  {
    path: 'noticias',
    loadComponent: () =>
      import('@portal-ascepa/news').then((m) => m.NewsComponent),
    title: 'Notícias | Associação de e para Cegos do Pará',
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
  {
    path: '**',
    redirectTo: 'home',
  },
];
