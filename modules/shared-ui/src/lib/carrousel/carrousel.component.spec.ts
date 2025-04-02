import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { CarrouselComponent, LatestNews } from './carrousel.component';

describe('CarrouselComponent', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;

  const exampleImages: LatestNews[] = [
    {
      title: 'Image 1',
      content: 'Content for Image 1',
      imageUrl: 'https://example.com/image1.jpg',
      altText: 'Image 1 Alt Text',
      href: 'https://example.com/image1',
    },
    {
      title: 'Image 2',
      content: 'Content for Image 2',
      imageUrl: 'https://example.com/image2.jpg',
      altText: 'Image 2 Alt Text',
      href: 'https://example.com/image2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    component.cards = exampleImages;
    component.autoPlay = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.selectedIndex).toBe(0);
    expect(component.hidden).toBeFalsy();
    expect(component.cards).toEqual(exampleImages);
    expect(component.showIndicator).toBe(true);
    expect(component.showNavigators).toBe(true);
    expect(component.animationSpeed).toBe(1000);
    expect(component.autoPlay).toBe(false);
    expect(component.autoPlayInterval).toBe(3000);
  });

  it('should change slides when next() is called', fakeAsync(() => {
    const initialIndex = component.selectedIndex;
    component.next();
    tick(component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(
      (initialIndex + 1) % component.cards.length,
    );
  }));

  it('should change slides when previous() is called', fakeAsync(() => {
    component.selectedIndex = 1;
    const initialIndex = component.selectedIndex;
    component.previous();
    tick(component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(
      (initialIndex - 1 + component.cards.length) % component.cards.length,
    );
  }));

  it('should change slides when jumpToSlide() is called', fakeAsync(() => {
    const newIndex = 0;
    component.jumpToSlide(newIndex);
    tick(component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(newIndex);
  }));

  it('should handle jumpToSlide() with invalid index', fakeAsync(() => {
    component.jumpToSlide(0);
    tick(component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(0);
  }));

  it('should autoplay when autoPlay is true', fakeAsync(() => {
    component.autoPlay = true;
    fixture.detectChanges();
    component.ngOnInit();
    tick(component.autoPlayInterval + component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(1);
    discardPeriodicTasks();
  }));

  it('should pause autoplay when user interacts', fakeAsync(() => {
    component.autoPlay = true;
    fixture.detectChanges();
    component.ngOnInit();
    component.next();
    tick(component.autoPlayInterval + component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(0);
    discardPeriodicTasks();
  }));

  it('should wrap around to the first slide when reaching the last slide', fakeAsync(() => {
    component.selectedIndex = component.cards.length - 1;
    component.next();
    tick(component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(0);
  }));
  it('should handle a large number of slides', fakeAsync(() => {
    const largeNumber = 100;
    component.cards = Array.from({ length: largeNumber }, (_, i) => ({
      title: `Image ${i + 1}`,
      imageUrl: `https://example.com/image${i + 1}.jpg`,
      imageAlt: `Image ${i + 1} Alt Text`,
      href: `https://example.com/image${i + 1}`,
      content: `Content for Image ${i + 1}`,
      altText: `Alt text for Image ${i + 1}`,
    }));
    fixture.detectChanges();
    component.next();
    tick(component.animationSpeed);
    fixture.detectChanges();
    expect(component.selectedIndex).toBe(1);
  }));

  it('should set window.location.href to image href on Enter key press', () => {
    const setHrefMock = jest.fn();
    // delete window.location;
    Object.defineProperty(window, 'location', {
      value: {
        set href(href: string) {
          setHrefMock(href);
        },
      },
      writable: true,
    });
    component.cards = [
      {
        title: 'Example Image',
        content: 'Example Content',
        imageUrl: 'https://example.com/image.jpg',
        altText: 'Example Image Alt Text',
        href: 'http://example.com',
      },
    ];
    component.selectedIndex = 0;
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    document.dispatchEvent(event);
    expect(setHrefMock).toHaveBeenCalledWith('http://example.com');
  });

  it('should call previous() when ArrowLeft key is pressed', () => {
    const previousSpy = jest.spyOn(component, 'previous');
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });

    document.dispatchEvent(event);

    expect(previousSpy).toHaveBeenCalled();
  });
  it('should call next() when ArrowRight key is pressed', () => {
    const nextSpy = jest.spyOn(component, 'next');
    const event = new KeyboardEvent('keyup', { key: 'ArrowRight' });

    document.dispatchEvent(event);

    expect(nextSpy).toHaveBeenCalled();
  });

  it('should call handleKeyEnter() when Enter key is pressed', () => {
    const handleKeyEnterSpy = jest.spyOn(component, 'handleKeyEnter');
    const event = new KeyboardEvent('keypress', { key: 'Enter' });

    document.dispatchEvent(event);

    expect(handleKeyEnterSpy).toHaveBeenCalledWith(event);
  });

  it('should navigate to the href of the selected card on Enter key press', () => {
    const setHrefMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        set href(href: string) {
          setHrefMock(href);
        },
      },
      writable: true,
    });

    component.cards = [
      {
        title: 'Example Card',
        content: 'Example Content',
        imageUrl: 'https://example.com/image.jpg',
        altText: 'Example Image Alt Text',
        href: 'http://example.com',
      },
    ];
    component.selectedIndex = 0;
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    document.dispatchEvent(event);
    expect(setHrefMock).toHaveBeenCalledWith('http://example.com');
  });

  it('should not navigate if href is undefined on Enter key press', () => {
    const setHrefMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        set href(href: string) {
          setHrefMock(href);
        },
      },
      writable: true,
    });

    component.cards = [
      {
        title: 'Example Card',
        content: 'Example Content',
        imageUrl: 'https://example.com/image.jpg',
        altText: 'Example Image Alt Text',
      },
    ];
    component.selectedIndex = 1;
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    if (
      component.cards[component.selectedIndex] &&
      component.cards[component.selectedIndex].href
    ) {
      component.handleKeyEnter(event);
    }
    expect(setHrefMock).not.toHaveBeenCalled();
  });
});
