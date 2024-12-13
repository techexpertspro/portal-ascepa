import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakpointService } from '@portal-ascepa/shared-ui';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let breakpointService: jest.Mocked<BreakpointService>;

  beforeEach(async () => {
    const breakpointServiceMock = {
      isXSmall: jest.fn(),
      isSmall: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, BannerComponent],
      providers: [
        { provide: BreakpointService, useValue: breakpointServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    breakpointService = TestBed.inject(
      BreakpointService,
    ) as jest.Mocked<BreakpointService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct alt text', () => {
    expect(component.altText).toBe('Banner principal');
  });

  it('should return desktop image when not mobile', () => {
    breakpointService.isXSmall.mockReturnValue(false);
    breakpointService.isSmall.mockReturnValue(false);
    fixture.detectChanges();
    expect(component.currentImage()).toBe('banner.svg');
  });

  it('should return mobile image when mobile', () => {
    breakpointService.isXSmall.mockReturnValue(true);
    breakpointService.isSmall.mockReturnValue(true);
    fixture.detectChanges();
    expect(component.currentImage()).toBe('banner-mb.svg');
  });

  it('should update image when breakpoint changes', () => {
    breakpointService.isXSmall.mockReturnValue(false);
    breakpointService.isSmall.mockReturnValue(false);
    fixture.detectChanges();
    expect(component.currentImage()).toBe('banner.svg');

    breakpointService.isXSmall.mockReturnValue(true);
    breakpointService.isSmall.mockReturnValue(true);
    fixture.detectChanges();
    expect(component.currentImage()).toBe('banner-mb.svg');
  });

  it('should return mobile image when only isXSmall is true', () => {
    breakpointService.isXSmall.mockReturnValue(true);
    breakpointService.isSmall.mockReturnValue(false);
    fixture.detectChanges();
    expect(component.currentImage()).toBe('banner-mb.svg');
  });

  it('should return mobile image when only isSmall is true', () => {
    breakpointService.isXSmall.mockReturnValue(false);
    breakpointService.isSmall.mockReturnValue(true);
    fixture.detectChanges();
    expect(component.currentImage()).toBe('banner-mb.svg');
  });
});
