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

  it('should show vancancy title', () => {
    component.vaga = mock;
    fixture.detectChanges();
    const h3Element: HTMLElement = fixture.nativeElement.querySelector(
      `#vaga-title-${mock.id}`,
    );
    expect(h3Element).toBeDefined();
    expect(h3Element.innerHTML).toContain(mock.title);
  });

  it('should show vacancy title', () => {
    component.vaga = mock;
    fixture.detectChanges();
    const buttonDetails: HTMLButtonElement =
      fixture.nativeElement.querySelector(`#detailBtn`);
    expect(buttonDetails).toBeDefined();
    expect(buttonDetails.textContent).toContain(component.seeDetailsButtonText);
  });
});
