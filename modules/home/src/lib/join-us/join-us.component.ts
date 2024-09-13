import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

type joinUs = {
  title: string;
  text: string;
  imgSrc: string;
  alternativeText: string;
  button: string;
};

@Component({
  selector: 'lib-join-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent {
  @Input() public joinUs: joinUs = {
    title: 'Filie-se',
    text: 'Junte-se a nós e fortaleça a luta pelos direitos das pessoas com deficiência visual no Pará! Ao se filiar à nossa associação, você contribuirá para ampliar o acesso a oportunidades de inclusão, educação e suporte para a comunidade de cegos. Faça parte dessa rede e ajude a construir um futuro mais acessível para todos.',
    imgSrc: 'joinus.png',
    alternativeText: 'Foto de equipe da família ASCEPA',
    button: 'Saiba mais',
  };

  public learnMore(): void {
    // eslint-disable-next-line no-console
    console.log('click saiba mais');
  }
}
