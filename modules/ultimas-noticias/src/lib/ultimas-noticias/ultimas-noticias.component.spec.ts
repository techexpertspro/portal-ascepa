import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltimasNoticiasComponent } from './ultimas-noticias.component';
import { By } from '@angular/platform-browser';

describe('UltimasNoticiasComponent', () => {
  let component: UltimasNoticiasComponent;
  let fixture: ComponentFixture<UltimasNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimasNoticiasComponent], // Importar o componente standalone
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasNoticiasComponent);
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
      By.css('.main-image'),
    ).nativeElement;
    expect(mainImageElement.getAttribute('alt')).toBe(
      'imagem noticia principal',
    );
  });

  it('should render side images with the correct alt text', () => {
    const sideImageElements = fixture.debugElement.queryAll(
      By.css('.side-image'),
    );
    sideImageElements.forEach((img) => {
      expect(img.nativeElement.getAttribute('alt')).toBe(
        'imagem noticia lateral',
      );
    });
  });
});
