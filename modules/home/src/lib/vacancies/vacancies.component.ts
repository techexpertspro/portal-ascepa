import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-vacancies',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacanciesComponent {}
