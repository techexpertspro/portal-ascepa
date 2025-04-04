import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnchorComponent, PaginationComponent } from '@portal-ascepa/shared-ui';
import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewsComponent,
        CommonModule,
        AnchorComponent,
        PaginationComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main news section', () => {
    const mainNews = fixture.nativeElement.querySelector('.main-news');
    expect(mainNews).toBeTruthy();
    expect(mainNews.querySelector('h2 a')).toBeTruthy();
    expect(mainNews.querySelector('p')).toBeTruthy();
  });

  it('should render the side news section with at least three articles', () => {
    const sideNews = fixture.nativeElement.querySelector('.side-news');
    expect(sideNews).toBeTruthy();

    const articles = sideNews.querySelectorAll('.side-news__resume');
    expect(articles.length).toBeGreaterThanOrEqual(3);
  });

  it('should render multiple news articles', () => {
    const newsArticles = fixture.nativeElement.querySelectorAll('article.news');
    expect(newsArticles.length).toBe(2); // Based on loop iteration
  });

  it('should render libAnchor buttons in news articles', () => {
    const anchorButtons =
      fixture.nativeElement.querySelectorAll('a[libAnchor]');
    expect(anchorButtons.length).toBe(2); // Should match the number of articles
  });

  it('should render the pagination component', () => {
    const pagination = fixture.nativeElement.querySelector('lib-pagination');
    expect(pagination).toBeTruthy();
  });

  it('should update the current page when pagination emits pageChange', () => {
    fixture.debugElement.nativeElement.querySelector('lib-pagination');
    expect(component.currentPage()).toBe(1);

    // Simulate page change event
    component.changePage(3);
    fixture.detectChanges();

    expect(component.currentPage()).toBe(3);
  });
});
