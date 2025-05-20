import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsDetailBannerComponent } from './news-detail-banner.component';

describe('NewsDetailBannerComponent', () => {
  let component: NewsDetailBannerComponent;
  let fixture: ComponentFixture<NewsDetailBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDetailBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDetailBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image correctly', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toContain('main-news-detail.svg');
    expect(img.alt).toBe('Banner com os detalhes da noticia');
    expect(img.width).toBe(1440);
    expect(img.height).toBe(400);
  });

  it('must have responsive class', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.classList).toContain('news-detail-banner__img');
  });
});
