import { Route } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

export const homeRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: AboutUsComponent },
  { path: 'noticias', component: LatestNewsComponent },
  { path: 'filie-se', component: JoinUsComponent },
];
