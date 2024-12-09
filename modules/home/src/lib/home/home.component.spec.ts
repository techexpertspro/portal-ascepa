import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let metaService: Meta;
  let breakpointObserver: BreakpointObserver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        Meta,
        {
          provide: BreakpointObserver,
          useValue: {
            observe: jest.fn().mockReturnValue(of({ matches: false })),
          },
        },
      ],
    }).compileComponents();

    metaService = TestBed.inject(Meta);
    breakpointObserver = TestBed.inject(BreakpointObserver);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add meta tags', () => {
    // Arrange
    component.ngOnInit();

    // Act
    const descriptionTag = metaService.getTag('name="description"');
    const authorTag = metaService.getTag('name="author"');
    const ogTitleTag = metaService.getTag('property="og:title"');

    // Assert
    expect(descriptionTag?.content).toBe(
      'Página inicial do Portal Ascepa. ONG Associação de e para Cegos do Pará.',
    );
    expect(authorTag?.content).toBe(
      'Mentoria Angular PRO | Tech Experts - https://techexperts.pro',
    );
    expect(ogTitleTag?.content).toBe(
      'Portal Ascepa - Associação de e para Cegos do Pará.',
    );
  });

  it('should set isMobile and isCarouselActive based on breakpoint', () => {
    // Arrange
    const breakpointSpy = jest
      .spyOn(breakpointObserver, 'observe')
      .mockReturnValue(
        of({ matches: true, breakpoints: { '(max-width: 600px)': true } }),
      );

    // Act
    component.ngOnInit();

    // Assert
    expect(breakpointSpy).toHaveBeenCalledWith(['(max-width: 600px)']);
    expect(component.isMobile()).toBe(true);
    expect(component.isCarouselActive()).toBe(true);
  });

  it('should unsubscribe on destroy', () => {
    // Arrange
    const unsubscribeSpy = jest.spyOn(component['subscription'], 'unsubscribe');

    // Act
    component.ngOnDestroy();

    // Assert
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should update isCarouselActive on carousel state change', (done) => {
    // Arrange
    component.isMobile.set(true);

    // Act
    component.onCarouselStateChange(true);

    // Assert
    setTimeout(() => {
      expect(component.isCarouselActive()).toBe(true);
      done();
    }, 0);
  });
});
