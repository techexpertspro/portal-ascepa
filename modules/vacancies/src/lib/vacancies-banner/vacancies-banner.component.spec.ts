import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacanciesBannerComponent } from './vacancies-banner.component';

describe('VacanciesBannerComponent', () => {
  let component: VacanciesBannerComponent;
  let fixture: ComponentFixture<VacanciesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image correctly', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toContain('main-vacancies.svg');
    expect(img.alt).toBe('Banner com vagas abertas para tecnologia');
    expect(img.width).toBe(1440);
    expect(img.height).toBe(400);
  });

  it('must have responsive class', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.classList).toContain('vacancies-banner__img');
  });
});
