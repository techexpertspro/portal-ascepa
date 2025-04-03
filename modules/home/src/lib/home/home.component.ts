import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AboutUsComponent } from '../about-us/about-us.component';
import { JoinUsComponent } from '../join-us/join-us.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutUsComponent,
    LatestNewsComponent,
    JoinUsComponent,
    SocialMediaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // Injeção dos Serviços
  private readonly meta = inject(Meta);

  public aboutUsText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit. Id volutpat lacus laoreet non curabitur. Nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus vitae congue mauris rhoncus aenean. Ornare lectus sit amet est placerat. Tortor at risus viverra adipiscing at in tellus integer. Pretium quam vulputate dignissim suspendisse. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Augue eget arcu dictum varius. Massa id neque aliquam vestibulum. Sed risus ultricies tristique nulla.Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Purus semper eget duis at tellus at urna condimentum. Pellentesque sit amet porttitor eget dolor morbi non. Odio facilisis mauris sit amet. Ut tellus elementum sagittis vitae. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Risus ultricies tristique nulla aliquet enim tortor at auctor. Eget est lorem ipsum dolor sit amet consectetur.';

  public imgSrc = 'main-notice.svg';
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
