import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IVacancy } from '../../interfaces/Ivacancy.interface';

@Component({
  selector: 'lib-vacancies-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancies-card.component.html',
  styleUrl: './vacancies-card.component.scss',
})
export class VacanciesCardComponent {
  @Input({ required: true }) vaga!: IVacancy;
  readonly applyButtonText: string = 'Aplicar';
  readonly seeDetailsButtonText: string = 'Ver detalhes';
}
