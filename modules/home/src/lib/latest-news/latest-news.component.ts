import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface NewsItem {
  imageUrl: string;
  altText: string;
  title: string;
  content: string;
}

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
  mainNews: NewsItem = {
    imageUrl: 'main-notice.svg',
    altText: 'principal noticia',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit. Id volutpat lacus laoreet non curabitur. Nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus vitae congue mauris rhoncus aenean. Ornare lectus sit amet est placerat. Tortor at risus viverra adipiscing at in tellus integer.',
  };

  sideNews: NewsItem[] = [
    {
      imageUrl: 'side-notice.svg',
      altText: 'noticia lateral',
      title: 'Lorem ipsum dolor sit amet',
      content: '',
    },
    {
      imageUrl: 'side-notice.svg',
      altText: 'noticia lateral',
      title: 'Lorem ipsum dolor sit amet',
      content: '',
    },
    {
      imageUrl: 'side-notice.svg',
      altText: 'noticia lateral',
      title: 'Lorem ipsum dolor sit amet',
      content: '',
    },
  ];
}
