import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrouselComponent } from '@portal-ascepa/carrousel';

@Component({
  selector: 'lib-ultimas-noticias',
  standalone: true,
  imports: [CommonModule, CarrouselComponent],
  templateUrl: './ultimas-noticias.component.html',
  styleUrl: './ultimas-noticias.component.scss',
})
export class UltimasNoticiasComponent {
  images = [
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'nature1',
      title: 'Lorem ipsum dolor sit amet 1',
    },
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'nature2',
      title: 'Lorem ipsum dolor sit amet 2',
    },
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'person1',
      title: 'Lorem ipsum dolor sit amet 3',
    },
    {
      imageSrc: 'image-placeholder.png',
      imageAlt: 'person2',
      title: 'Lorem ipsum dolor sit amet 4',
    },
  ];
}
