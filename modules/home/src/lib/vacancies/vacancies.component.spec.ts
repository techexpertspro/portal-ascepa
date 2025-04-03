import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent, CarrouselComponent } from '@portal-ascepa/shared-ui';
import { VacanciesComponent } from './vacancies.component';
import { JOB_LIST } from './vacancies.constants';

describe('VacanciesComponent', () => {
  let component: VacanciesComponent;
  let fixture: ComponentFixture<VacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VacanciesComponent,
        CardComponent,
        CarrouselComponent,
        CommonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "Vagas"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Vagas');
  });

  it('should render all vacancies', () => {
    const compiled = fixture.nativeElement;

    const vacancySection = compiled.querySelector(
      'section[aria-label="Lista de vagas"]',
    );
    const vacancyCardsDesktop = vacancySection.querySelectorAll(
      '.desktop-only lib-card',
    );

    expect(vacancyCardsDesktop.length).toBe(JOB_LIST.length);
  });

  it('should display mobile carousel when screen width is small', () => {
    const compiled = fixture.nativeElement;
    const mobileArticle = compiled.querySelector('.mobile-only');
    expect(mobileArticle).toBeTruthy();
  });

  it('should display desktop cards when screen width is large', () => {
    const compiled = fixture.nativeElement;
    const desktopArticle = compiled.querySelector('.desktop-only');
    expect(desktopArticle).toBeTruthy();
  });
});
