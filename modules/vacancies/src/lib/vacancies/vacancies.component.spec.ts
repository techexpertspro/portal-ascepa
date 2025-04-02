import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacanciesComponent } from './vacancies.component';

describe('VacanciesComponent', () => {
  let component: VacanciesComponent;
  let fixture: ComponentFixture<VacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    fixture.detectChanges();
    const h2Element: HTMLElement =
      fixture.nativeElement.querySelector(`#vacancy-title`);
    expect(h2Element).toBeDefined();
    expect(h2Element.innerHTML).toContain(component.title);
  });
});
