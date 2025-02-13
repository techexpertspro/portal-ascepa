import { CommonModule } from '@angular/common';
import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { CarrouselComponent } from './carrousel.component';

describe('CarrouselComponent', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;

  const exampleItems = [
    { title: 'Item 1', imageSrc: 'https://example.com/image1.jpg' },
    { title: 'Item 2', imageSrc: 'https://example.com/image2.jpg' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatIconModule, CarrouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    component.items = exampleItems;
    component.autoPlay = false;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.selectedIndex).toBe(0);
    expect(component.showIndicator).toBe(true);
    expect(component.showNavigators).toBe(true);
    expect(component.animationSpeed).toBe(1000);
    expect(component.autoPlay).toBe(false);
    expect(component.autoPlayInterval).toBe(3000);
  });

  it('should display the current item', () => {
    const slideElement = fixture.debugElement.query(By.css('.slide'));
    expect(slideElement).toBeTruthy();
  });

  it('should navigate to the next slide when next() is called', fakeAsync(() => {
    component.next();
    tick();
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(1);
  }));

  it('should navigate to the previous slide when previous() is called', fakeAsync(() => {
    component.selectedIndex = 1;
    component.previous();
    tick();
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(0);
  }));

  it('should jump to a specific slide when jumpToSlide() is called', () => {
    component.jumpToSlide(1);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(1);
  });

  it('should wrap around to the first slide from the last when next() is called', fakeAsync(() => {
    component.selectedIndex = exampleItems.length - 1;
    component.next();
    tick();
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(0);
  }));

  it('should wrap around to the last slide from the first when previous() is called', fakeAsync(() => {
    component.selectedIndex = 0;
    component.previous();
    tick();
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(exampleItems.length - 1);
  }));

  it('should autoplay when autoPlay is true', fakeAsync(() => {
    component.autoPlay = true;
    component.ngOnInit();
    tick(component.autoPlayInterval);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(1);
    discardPeriodicTasks();
  }));

  it('should stop autoplay on component destruction', fakeAsync(() => {
    component.autoPlay = true;
    component.ngOnInit();
    component.ngOnDestroy();
    tick(component.autoPlayInterval);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(0);
    discardPeriodicTasks();
  }));

  it('should handle keyboard navigation (ArrowRight and ArrowLeft)', () => {
    const nextSpy = jest.spyOn(component, 'next');
    const previousSpy = jest.spyOn(component, 'previous');

    const rightEvent = new KeyboardEvent('keyup', { key: 'ArrowRight' });
    const leftEvent = new KeyboardEvent('keyup', { key: 'ArrowLeft' });

    // Simula o evento de teclado
    component.onKeyUp(rightEvent);
    expect(nextSpy).toHaveBeenCalled();

    component.onKeyUp(leftEvent);
    expect(previousSpy).toHaveBeenCalled();
  });

  it('should update indicators when slide changes', () => {
    component.jumpToSlide(1);
    fixture.detectChanges();

    const activeIndicator = fixture.debugElement.query(
      By.css('.indicator.active'),
    );
    expect(activeIndicator).toBeTruthy();
  });

  it('should not throw an error if jumpToSlide() is called with an invalid index', () => {
    expect(() => component.jumpToSlide(-1)).not.toThrow();
    expect(() => component.jumpToSlide(exampleItems.length)).not.toThrow();
  });
});
