import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VacanciesCardComponent } from '../vacancies-card/vacancies-card.component';

@Component({
  selector: 'lib-vacancies',
  standalone: true,
  imports: [CommonModule, VacanciesCardComponent],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss',
})
export class VacanciesComponent {
  readonly vagas: number[] = [1, 2, 3, 4, 5, 6];
}
