import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LatestNewsComponent } from './latest-news.component';

describe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsComponent], // Importar o componente standalone
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main title', () => {
    const titleElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElement.textContent).toContain('Últimas Notícias');
  });

  it('should render the main image with the correct alt text', () => {
    const mainImageElement = fixture.debugElement.query(
      By.css('div article img'),
    ).nativeElement;
    expect(mainImageElement.getAttribute('alt')).toBe('principal noticia');
  });

  it('should render side images with the correct alt text', () => {
    const sideImageElements = fixture.debugElement.queryAll(
      By.css('aside article img'),
    );
    sideImageElements.forEach((img) => {
      expect(img.nativeElement.getAttribute('alt')).toBe('noticia lateral');
    });
  });
});
