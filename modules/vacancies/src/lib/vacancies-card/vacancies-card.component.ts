import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IVacancy } from '../../interfaces/Ivacancy.interface';

@Component({
  selector: 'lib-vacancies-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancies-card.component.html',
  styleUrl: './vacancies-card.component.scss',
})
export class VacanciesCardComponent {
  vaga = input.required<IVacancy>();
  readonly applyButtonText: string = 'Aplicar';
  readonly seeDetailsButtonText: string = 'Ver detalhes';
}
