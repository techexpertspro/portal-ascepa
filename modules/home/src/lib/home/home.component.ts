import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
  // Injeção dos Serviços
  private meta = inject(Meta);

  public aboutUsText =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry...';
  public imgSrc = 'image-placeholder.png';
  public alternativeText = 'Foto de equipe da família ASCEPA';

  ngOnInit() {
    // Adiciona meta tags
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
