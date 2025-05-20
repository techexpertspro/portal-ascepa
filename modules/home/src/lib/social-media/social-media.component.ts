import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface SocialMediaItem {
  title: string;
  text: string;
  icon: string;
  imgSrc: string;
  link: string;
  ariaLabel: string;
}

/**
 * *Componente para exibir conteúdo as redes sociais da Ascepa.
 * @description Este componente possui link para acesso ao Instagram da Ascepa e exibe as algumas postagens. Está formatado em grid, alterando a posição dos elementos de acordo com o tamanho da tela.
 * @example
 * ```html
 * <lib-social-media></lib-social-media>
 * ```
 * @author Tech Experts
 */
@Component({
  selector: 'lib-social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaComponent {
  public instagramLink = 'https://www.instagram.com/ascepaoficial/';
  public imageLandscape = 'image-landscape.png';

  public socialMedia: SocialMediaItem[] = [
    {
      title: 'Instagram',
      text: 'Confira o que está rolando no nosso Instagram',
      icon: 'instagram-logo.png',
      imgSrc: '',
      link: this.instagramLink,
      ariaLabel: 'Link para o Instagram da Ascepa',
    },
    {
      title: 'Postagem 1',
      text: '',
      icon: '',
      imgSrc: this.imageLandscape,
      link: this.instagramLink,
      ariaLabel: 'Link para a postagem 1 do Instagram da Ascepa',
    },
    {
      title: 'Postagem 2',
      text: '',
      icon: '',
      imgSrc: this.imageLandscape,
      link: this.instagramLink,
      ariaLabel: 'Link para a postagem 2 do Instagram da Ascepa',
    },
    {
      title: 'Postagem 3',
      text: '',
      icon: '',
      imgSrc: this.imageLandscape,
      link: this.instagramLink,
      ariaLabel: 'Link para a postagem 3 do Instagram da Ascepa',
    },
    {
      title: 'Postagem 4',
      text: '',
      icon: '',
      imgSrc: this.imageLandscape,
      link: this.instagramLink,
      ariaLabel: 'Link para a postagem 4 do Instagram da Ascepa',
    },
  ];
}
