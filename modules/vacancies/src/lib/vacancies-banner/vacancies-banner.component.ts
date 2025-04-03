import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-vacancies-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancies-banner.component.html',
  styleUrl: './vacancies-banner.component.scss',
})
export class VacanciesBannerComponent {}
