import { CommonModule } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
  discardPeriodicTasks,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarrouselComponent, caroulseImage } from './carrousel.component';

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
    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    component.images = exampleImages; // Definindo imagens de exemplo
    component.autoPlay = false; // Desabilitar autoPlay durante os testes
    fixture.detectChanges();
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
    expect(component.animationSpeed).toBe(1000);
    expect(component.autoPlay).toBe(false);
    expect(component.autoPlayInterval).toBe(3000);
  });

  it('should change slides when next() is called', fakeAsync(() => {
    const initialIndex = component.selectedIndex;
    component.next();
    tick(component.animationSpeed); // Simula a passagem do tempo

    fixture.detectChanges(); // Atualizar a detecção de mudanças

    expect(component.selectedIndex).toBe(
      (initialIndex + 1) % component.images.length,
    );
  }));

  it('should change slides when previous() is called', fakeAsync(() => {
    component.selectedIndex = 1; // Supondo que há pelo menos uma imagem
    const initialIndex = component.selectedIndex;
    component.previous();
    tick(component.animationSpeed); // Simula a passagem do tempo

    fixture.detectChanges(); // Atualizar a detecção de mudanças

    expect(component.selectedIndex).toBe(
      (initialIndex - 1 + component.images.length) % component.images.length,
    );
  }));

  it('should change slides when jumpToSlide() is called', fakeAsync(() => {
    const newIndex = 1; // Supondo que há pelo menos duas imagens
    component.jumpToSlide(newIndex);
    tick(component.animationSpeed); // Simula a passagem do tempo

    fixture.detectChanges(); // Atualizar a detecção de mudanças

    expect(component.selectedIndex).toBe(newIndex);
  }));

  it('should autoplay when autoPlay is true', fakeAsync(() => {
    component.autoPlay = true;
    fixture.detectChanges();
    component.ngOnInit(); // Garante que o ngOnInit é chamado
    tick(component.autoPlayInterval + component.animationSpeed); // Simula a passagem do tempo
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(1); // Espera que o selectedIndex tenha avançado em um
    discardPeriodicTasks();
  }));

  it('should wrap around to the first slide when reaching the last slide', fakeAsync(() => {
    component.selectedIndex = component.images.length - 1; // Define para o último slide
    component.next(); // Chama o método para ir ao próximo slide
    tick(component.animationSpeed); // Simula a passagem do tempo

    expect(component.selectedIndex).toBe(0); // Espera que volte para o primeiro slide
  }));
});
