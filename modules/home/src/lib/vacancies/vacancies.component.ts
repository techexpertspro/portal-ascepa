import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent, CarrouselComponent } from '@portal-ascepa/shared-ui';
import { Job } from './shared/models/job.model';
import { JOB_LIST } from './vacancies.constants';

@Component({
  selector: 'lib-vacancies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CardComponent, CarrouselComponent],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss',
})
export class VacanciesComponent {
  vacancies: Array<Job> = JOB_LIST;
}
