import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BreakpointService } from '@portal-ascepa/shared-ui';
import { AboutUsComponent } from './about-us.component';
import { MAGIC_NUMBERS } from './about-us.constants';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;
  let mockBreakpointService: BreakpointService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsComponent],
      providers: [
        {
          provide: BreakpointService,
          useValue: { isHandsetPortrait: () => true },
        },
      ],
    })
      .overrideComponent(AboutUsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
    mockBreakpointService = TestBed.inject(BreakpointService);
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the h2 title correctly', () => {
    const sectionTitle = fixture.debugElement.query(By.css('h2'))
      .nativeElement as HTMLHeadingElement;

    expect(sectionTitle.textContent).toBe(component['aboutUs'].title);
  });

  it('should render the paragraph text correctly', () => {
    const sectionTitle = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLElement;

    expect(sectionTitle.textContent).toContain(component['aboutUs'].text);
  });

  it('should render the image with the correct attributes', () => {
    const imgElement: HTMLImageElement =
      fixture.nativeElement.querySelector('img');

    expect(imgElement.src).toContain(component['aboutUs'].imgSrc);
    expect(imgElement.alt).toBe(component['aboutUs'].alternativeText);
    expect(imgElement.width).toBe(MAGIC_NUMBERS.FOUR_HUNDRED);
    expect(imgElement.height).toBe(MAGIC_NUMBERS.FOUR_HUNDRED);
  });

  it('should apply "handset-portrait" class when isHandsetPortrait is true', () => {
    const sectionElement = fixture.debugElement.query(
      By.css('section'),
    ).nativeElement;
    expect(sectionElement.classList).toContain('handset-portrait');
  });

  it('should apply "default" class when isHandsetPortrait is false', () => {
    fixture.destroy();
    jest
      .spyOn(mockBreakpointService, 'isHandsetPortrait')
      .mockReturnValue(false);

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const sectionElement = fixture.debugElement.query(
      By.css('section'),
    ).nativeElement;
    expect(sectionElement.classList).toContain('default');
  });
});
