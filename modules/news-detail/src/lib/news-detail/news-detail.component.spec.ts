import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NewsDetailComponent } from './news-detail.component';

describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    component.title = 'Notícia de Teste';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title correctly', () => {
    const titleElement = fixture.debugElement.query(By.css('h2'));
    expect(titleElement.nativeElement.textContent).toContain(
      'Notícia de Teste',
    );
  });

  it('should contain the news banner', () => {
    const banner = fixture.debugElement.query(By.css('lib-news-detail-banner'));
    expect(banner).toBeTruthy();
  });

  it('should contain a <main> element', () => {
    const mainElement = fixture.debugElement.query(By.css('main'));
    expect(mainElement).toBeTruthy();
  });

  it('should contain a <section> with the class .news-detail-container', () => {
    const sectionElement = fixture.debugElement.query(
      By.css('section.news-detail-container'),
    );
    expect(sectionElement).toBeTruthy();
  });

  it('should contain an <article> inside the <section>', () => {
    const articleElement = fixture.debugElement.query(
      By.css('section.news-detail-container article'),
    );
    expect(articleElement).toBeTruthy();
  });

  it('should contain at least one paragraph inside the <article>', () => {
    const paragraphElements = fixture.debugElement.queryAll(
      By.css('article p'),
    );
    expect(paragraphElements.length).toBeGreaterThan(0);
  });
});
