import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  public socialMedia = [
    {
      title: 'Instagram',
      text: 'Confira o que está rolando no nosso Instagram',
      icon: 'instagram-logo.png',
      imgSrc: '',
      link: 'https://www.instagram.com/ascepaoficial/',
      ariaLabel: 'Link para o Instagram da Ascepa',
    },
    {
      title: 'Facebook',
      text: '',
      icon: '',
      imgSrc: 'image-landscape.png',
      link: 'https://www.instagram.com/ascepaoficial/',
      ariaLabel: 'Link para o Facebook da Ascepa',
    },
    {
      title: 'Twitter',
      text: '',
      icon: '',
      imgSrc: 'image-landscape.png',
      link: 'https://www.instagram.com/ascepaoficial/',
      ariaLabel: 'Link para o Twitter da Ascepa',
    },
    {
      title: 'LinkedIn',
      text: '',
      icon: '',
      imgSrc: 'image-landscape.png',
      link: 'https://www.instagram.com/ascepaoficial/',
      ariaLabel: 'Link para o LinkedIn da Ascepa',
    },
  ];

  public featuresSocialNetwork = {
    title: '...',
    text: '',
    icon: '',
    imgSrc: 'image-landscape.png',
    link: 'https://www.instagram.com/ascepaoficial/',
    ariaLabel: 'Link para o ... da Ascepa',
  };
}
