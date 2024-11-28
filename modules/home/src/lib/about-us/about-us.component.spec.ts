import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { homeContentMock, SectionContent } from '@portal-ascepa/shared-ui';
import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent],
    })
      .overrideComponent(AboutUsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    component.content = homeContentMock[0] as Partial<SectionContent>;
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
    component.content.mainImage!.src = 'image-placeholder.png';
    fixture.detectChanges();

    const aboutImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    expect(aboutImageElement.getAttribute('src')).toBe(
      component.content.mainImage!.src,
    );
  });

  it('should render the about us image with the correct alt text', () => {
    fixture.detectChanges();

    const aboutImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    expect(aboutImageElement.getAttribute('alt')).toBe(
      'Foto de equipe da família ASCEPA',
    );
  });
});
