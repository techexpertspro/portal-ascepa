import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IVacancy } from '../../interfaces/Ivacancy.interface';
import { VacanciesCardComponent } from './vacancies-card.component';

describe('VacanciesCardComponent', () => {
  let component: VacanciesCardComponent;
  let fixture: ComponentFixture<VacanciesCardComponent>;
  const mock: IVacancy = {
    id: 1,
    description: 'test',
    company: 'test',
    title: 'test',
    tags: [],
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.vaga = mock;
    expect(component).toBeTruthy();
  });
});
