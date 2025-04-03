import { signal } from '@angular/core';
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

  const mockVacancySignal = signal(mock);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesCardComponent);
    component = fixture.componentInstance;

    (component as any).vaga = mockVacancySignal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show vacancy title', () => {
    const h3Element: HTMLElement = fixture.nativeElement.querySelector(
      `#vaga-title-${mock.id}`,
    );
    expect(h3Element).toBeDefined();
    expect(h3Element.innerHTML).toContain(mock.title);
  });

  it('should show details button text', () => {
    const buttonDetails: HTMLButtonElement =
      fixture.nativeElement.querySelector('#detailBtn');
    expect(buttonDetails).toBeDefined();
    expect(buttonDetails.textContent).toContain(component.seeDetailsButtonText);
  });
});
