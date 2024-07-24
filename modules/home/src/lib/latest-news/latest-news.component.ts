import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  Images = [
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'nature1',
      title: 'Lorem ipsum dolor sit amet 1',
      href: 'https://www.google.com',
    },
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'nature2',
      title: 'Lorem ipsum dolor sit amet 2',
      href: 'https://www.msn.com',
    },
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'person1',
      title: 'Lorem ipsum dolor sit amet 3',
      href: 'https://www.uol.com.br',
    },
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'person2',
      title: 'Lorem ipsum dolor sit amet 4',
      href: 'https://www.globo.com',
    },
  ];
}
