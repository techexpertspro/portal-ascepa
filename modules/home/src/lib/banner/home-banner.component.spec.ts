import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBannerComponent } from './home-banner.component';

describe('HomeBannerComponent', () => {
  let component: HomeBannerComponent;
  let fixture: ComponentFixture<HomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the home banner source image with the correct image filename', () => {
    component.bannerImgSrc = 'image-placeholder.png';
    fixture.detectChanges();

    const aboutImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    expect(aboutImageElement.getAttribute('src')).toBe(component.bannerImgSrc);
  });
});
