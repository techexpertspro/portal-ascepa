import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IVacancy } from '../../interfaces/Ivacancy.interface';
import { VacanciesBannerComponent } from '../vacancies-banner/vacancies-banner.component';
import { VacanciesCardComponent } from '../vacancies-card/vacancies-card.component';

@Component({
  selector: 'lib-vacancies',
  standalone: true,
  imports: [CommonModule, VacanciesCardComponent, VacanciesBannerComponent],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss',
})
export class VacanciesComponent {
  readonly vacancies: IVacancy[] = [
    {
      id: 1,
      title: 'Programador Front-end Pleno',
      tags: [
        { id: 1, title: 'Remoto' },
        { id: 2, title: 'Full time' },
      ],
      company: 'Empresa Lorem',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Desenvolvedor Back-end Sênior',
      tags: [
        { id: 3, title: 'Presencial' },
        { id: 4, title: 'CLT' },
      ],
      company: 'Tech Solutions',
      description:
        'Oportunidade para desenvolvedor back-end com experiência em Node.js e bancos de dados SQL e NoSQL.',
    },
    {
      id: 3,
      title: 'Engenheiro de Software',
      tags: [
        { id: 5, title: 'Híbrido' },
        { id: 6, title: 'PJ' },
      ],
      company: 'InovaTech',
      description:
        'Buscamos um engenheiro de software para atuar com arquitetura de microsserviços e cloud computing.',
    },
    {
      id: 4,
      title: 'Designer UI/UX',
      tags: [
        { id: 1, title: 'Remoto' },
        { id: 7, title: 'Freelancer' },
      ],
      company: 'Creative Agency',
      description:
        'Vaga para designer com experiência em Figma, prototipação e testes de usabilidade.',
    },
    {
      id: 5,
      title: 'Analista de Dados',
      tags: [
        { id: 5, title: 'Híbrido' },
        { id: 4, title: 'CLT' },
      ],
      company: 'Big Data Corp',
      description:
        'Procuramos um analista de dados com habilidades em Python, SQL e visualização de dados.',
    },
  ];
}
