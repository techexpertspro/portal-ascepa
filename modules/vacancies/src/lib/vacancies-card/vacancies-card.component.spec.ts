import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacanciesCardComponent } from './vacancies-card.component';

describe('VacanciesCardComponent', () => {
  let component: VacanciesCardComponent;
  let fixture: ComponentFixture<VacanciesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
