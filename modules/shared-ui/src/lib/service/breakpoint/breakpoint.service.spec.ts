import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  MEDIA_QUERIES,
  MediaQueryChanges,
} from '../../model/media-query.model';
import { BreakpointService } from './breakpoint.service';

describe('BreakpointService', () => {
  let service: BreakpointService;
  let breakpointObserverMock: jest.Mocked<BreakpointObserver>;

  beforeEach(() => {
    const mockBreakpoints: MediaQueryChanges = {
      [MEDIA_QUERIES.PORTRAIT]: true,
      [MEDIA_QUERIES.LANDSCAPE]: true,
      [MEDIA_QUERIES.SMALL_SCREEN]: true,
      [MEDIA_QUERIES.IPHONE]: true,
      [MEDIA_QUERIES.ANDROID]: true,
      [MEDIA_QUERIES.LARGE_MOBILE]: true,
      [MEDIA_QUERIES.TABLET]: true,
      [MEDIA_QUERIES.IPAD]: true,
      [MEDIA_QUERIES.LAPTOP]: true,
      [MEDIA_QUERIES.SMALL_LAPTOP]: true,
      [MEDIA_QUERIES.DESKTOP]: true,
      [MEDIA_QUERIES.WIDE_DESKTOP]: true,
    };
    breakpointObserverMock = {
      observe: jest.fn(() =>
        of({
          matches: true,
          breakpoints: mockBreakpoints,
        } as BreakpointState),
      ),
      isMatched: jest.fn(),
      ngOnDestroy: jest.fn(),
    } as unknown as jest.Mocked<BreakpointObserver>;

    TestBed.configureTestingModule({
      providers: [
        BreakpointService,
        {
          provide: BreakpointObserver,
          useValue: breakpointObserverMock,
        },
      ],
    });

    service = TestBed.inject(BreakpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly identify all media query states', () => {
    expect(service.isPortrait()).toBeTruthy();
    expect(service.isLandscape()).toBeTruthy();
    expect(service.isSmallScreen()).toBeTruthy();
    expect(service.isIphone()).toBeTruthy();
    expect(service.isAndroid()).toBeTruthy();
    expect(service.isLargeMobile()).toBeTruthy();
    expect(service.isTablet()).toBeTruthy();
    expect(service.isIpad()).toBeTruthy();
    expect(service.isLaptop()).toBeTruthy();
    expect(service.isSmallLaptop()).toBeTruthy();
    expect(service.isDesktop()).toBeTruthy();
    expect(service.isWideDesktop()).toBeTruthy();
  });

  it('should handle null or undefined layoutChanges', () => {
    (service as unknown as { layoutChanges: () => undefined }).layoutChanges =
      () => undefined;

    expect(service.isPortrait()).toBeFalsy();
    expect(service.isLandscape()).toBeFalsy();
    expect(service.isSmallScreen()).toBeFalsy();
    expect(service.isIphone()).toBeFalsy();
    expect(service.isAndroid()).toBeFalsy();
    expect(service.isLargeMobile()).toBeFalsy();
    expect(service.isTablet()).toBeFalsy();
    expect(service.isIpad()).toBeFalsy();
    expect(service.isLaptop()).toBeFalsy();
    expect(service.isSmallLaptop()).toBeFalsy();
    expect(service.isDesktop()).toBeFalsy();
    expect(service.isWideDesktop()).toBeFalsy();
  });
});
