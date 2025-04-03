import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialMediaComponent } from './social-media.component';

describe('SocialMediaComponent', () => {
  let component: SocialMediaComponent;
  let fixture: ComponentFixture<SocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of social media links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.social-media-section__links');
    expect(links.length).toBe(component.socialMedia.length);
  });

  it('should navigate to the correct URL when a link is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.social-media-section__links');
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(
        'https://www.instagram.com/ascepaoficial/',
      );
    });
  });

  it('should render the correct aria-labels for each link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.social-media-section__links');
    links.forEach((link, index) => {
      expect(link.getAttribute('aria-label')).toBe(
        component.socialMedia[index].ariaLabel,
      );
    });
  });

  it('should render the correct href for each link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.social-media-section__links');
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(component.socialMedia[index].link);
    });
  });

  it('should render the special item with text and icon for the first link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const specialItem = compiled.querySelector('.special-item');
    expect(specialItem).toBeTruthy();
    const img = specialItem?.querySelector('img');
    const text = specialItem?.querySelector('p');
    expect(img?.getAttribute('src')).toBe(component.socialMedia[0].icon);
    expect(text?.textContent).toBe(component.socialMedia[0].text);
  });
});
