import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrouselComponent, caroulseImage } from './carrousel.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

describe('CarrouselComponent', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;

  const exampleImages: caroulseImage[] = [
    {
      title: 'Image 1',
      imageSrc: 'https://example.com/image1.jpg',
      imageAlt: 'Image 1 Alt Text',
    },
    {
      title: 'Image 2',
      imageSrc: 'https://example.com/image2.jpg',
      imageAlt: 'Image 2 Alt Text',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CarrouselComponent, // Importando o componente standalone
        CommonModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    jest.useFakeTimers(); // Habilitar fake timers

    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    component.images = exampleImages; // Definindo imagens de exemplo
    component.autoPlay = false; // Desabilitar autoPlay durante os testes
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.useRealTimers(); // Restaurar timers reais após cada teste
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.selectedIndex).toBe(0);
    expect(component.hidden).toBeFalsy();
    expect(component.images).toEqual(exampleImages);
    expect(component.showIndicator).toBe(true);
    expect(component.showNavigators).toBe(true);
    expect(component.animationSpeed).toBe(500);
    expect(component.autoPlay).toBe(false);
    expect(component.autoPlayInterval).toBe(3000);
  });

  it('should change slides when next() is called', () => {
    const initialIndex = component.selectedIndex;
    component.next();
    jest.advanceTimersByTime(component.animationSpeed); // Avançar temporizadores pelo tempo da animação

    fixture.detectChanges(); // Atualizar a detecção de mudanças

    expect(component.selectedIndex).toBe(
      (initialIndex + 1) % component.images.length,
    );
  });

  it('should change slides when previous() is called', () => {
    component.selectedIndex = 1; // Supondo que há pelo menos uma imagem
    const initialIndex = component.selectedIndex;
    component.previous();
    jest.advanceTimersByTime(component.animationSpeed); // Avançar temporizadores pelo tempo da animação

    fixture.detectChanges(); // Atualizar a detecção de mudanças

    expect(component.selectedIndex).toBe(
      (initialIndex - 1 + component.images.length) % component.images.length,
    );
  });

  it('should change slides when jumpToSlide() is called', () => {
    const newIndex = 1; // Supondo que há pelo menos duas imagens
    component.jumpToSlide(newIndex);
    jest.advanceTimersByTime(component.animationSpeed); // Avançar temporizadores pelo tempo da animação

    fixture.detectChanges(); // Atualizar a detecção de mudanças

    expect(component.selectedIndex).toBe(newIndex);
  });
});
