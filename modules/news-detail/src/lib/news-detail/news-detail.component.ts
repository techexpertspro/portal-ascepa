import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsDetailBannerComponent } from '../news-detail-banner/news-detail-banner.component';

@Component({
  selector: 'lib-news-detail',
  standalone: true,
  imports: [CommonModule, NewsDetailBannerComponent],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
})
export class NewsDetailComponent {
  title = 'Detalhes da Notícia';
  readonly paragrapherText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Sit amet purus
          gravida quis blandit. Id volutpat lacus laoreet non curabitur. Nunc
          scelerisque viverra mauris in aliquam sem fringilla. Cursus vitae congue
          mauris rhoncus aenean. Ornare lectus sit amet est placerat. Tortor at
          risus viverra adipiscing at in tellus integer. Pretium quam vulputate
          dignissim suspendisse. Scelerisque eleifend donec pretium vulputate
          sapien nec sagittis aliquam. Augue eget arcu dictum varius. Massa id
          neque aliquam vestibulum. Sed risus ultricies tristique nulla.`;

  readonly paragraphers: string[] = [
    Array(5).fill(this.paragrapherText).join('<br><br>'),
  ];
}
