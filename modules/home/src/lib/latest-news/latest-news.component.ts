import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SectionContent } from '@portal-ascepa/shared-ui';

export interface NewsItem {
  imageUrl: string;
  altText: string;
  title: string;
  content: string;
}

@Component({
  selector: 'lib-latest-news',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  @Input() public content!: Partial<SectionContent>;
}
