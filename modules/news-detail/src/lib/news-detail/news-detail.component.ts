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
}
