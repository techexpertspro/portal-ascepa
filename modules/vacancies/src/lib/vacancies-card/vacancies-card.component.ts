import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-vacancies-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancies-card.component.html',
  styleUrl: './vacancies-card.component.scss',
})
export class VacanciesCardComponent {
  @Input() vaga: number | undefined;
}
