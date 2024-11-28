import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HomeContentService } from '@portal-ascepa/shared-ui';
import { AboutUsComponent } from '../about-us/about-us.component';
import { JoinUsComponent } from '../join-us/join-us.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutUsComponent,
    LatestNewsComponent,
    JoinUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly meta = inject(Meta);
  private readonly homeContent = inject(HomeContentService);

  protected readonly content$ = this.homeContent.getHomeContent();

  ngOnInit() {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Página inicial do Portal Ascepa. ONG Associação de e para Cegos do Pará.',
      },
      {
        name: 'author',
        content:
          'Mentoria Angular PRO | Tech Experts - https://techexperts.pro',
      },
      { name: 'keywords', content: 'Ascepa, Associação, Cegos, Pará, ONG' },
      {
        property: 'og:title',
        content: 'Portal Ascepa - Associação de e para Cegos do Pará.',
      },
      {
        property: 'og:description',
        content: 'Acompanhe as últimas notícias e saiba mais sobre a Ascepa.',
      },
      { property: 'og:url', content: 'https://portal-ascepa.vercel.app/home' },
    ]);
  }
}
