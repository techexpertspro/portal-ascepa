import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the h2 section title', () => {
    const titleElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElement.textContent).toContain('Quem somos');
  });

  it('should render the about us source image with the correct image filename', () => {
    component.imgSrc = 'image-placeholder.png';
    fixture.detectChanges();

    const aboutImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    expect(aboutImageElement.getAttribute('src')).toBe(component.imgSrc);
  });

  it('should render the about us image with the correct alt text', () => {
    component.alternativeText = 'alt teste';
    fixture.detectChanges();

    const aboutImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    expect(aboutImageElement.getAttribute('alt')).toBe(
      component.alternativeText,
    );
  });
});
