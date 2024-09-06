import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BreakpointService } from './breakpoint.service';

describe('BreakpointService', () => {
  let service: BreakpointService;
  let breakpointObserverMock: jest.Mocked<BreakpointObserver>;

  beforeEach(() => {
    breakpointObserverMock = {
      observe: jest.fn(() =>
        of({
          matches: true,
          breakpoints: Object.keys(Breakpoints).reduce((acc, key) => {
            acc[Breakpoints[key]] = true;
            return acc;
          }, {} as { [key: string]: boolean }),
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
    expect(service.isWeb()).toBeTruthy();
    expect(service.isWebPortrait()).toBeTruthy();
    expect(service.isWebLandscape()).toBeTruthy();
    expect(service.isHandset()).toBeTruthy();
    expect(service.isHandsetLandscape()).toBeTruthy();
    expect(service.isHandsetPortrait()).toBeTruthy();
    expect(service.isLarge()).toBeTruthy();
    expect(service.isMedium()).toBeTruthy();
    expect(service.isSmall()).toBeTruthy();
    expect(service.isTablet()).toBeTruthy();
    expect(service.isTabletLandscape()).toBeTruthy();
    expect(service.isTabletPortrait()).toBeTruthy();
    expect(service.isXLarge()).toBeTruthy();
    expect(service.isXSmall()).toBeTruthy();
  });

  it('should handle null or undefined layoutChanges', () => {
    (service as unknown as { layoutChanges: () => undefined }).layoutChanges =
      () => undefined;

    expect(service.isWeb()).toBeFalsy();
    expect(service.isWebPortrait()).toBeFalsy();
    expect(service.isWebLandscape()).toBeFalsy();
    expect(service.isHandset()).toBeFalsy();
    expect(service.isHandsetLandscape()).toBeFalsy();
    expect(service.isHandsetPortrait()).toBeFalsy();
    expect(service.isLarge()).toBeFalsy();
    expect(service.isMedium()).toBeFalsy();
    expect(service.isSmall()).toBeFalsy();
    expect(service.isTablet()).toBeFalsy();
    expect(service.isTabletLandscape()).toBeFalsy();
    expect(service.isTabletPortrait()).toBeFalsy();
    expect(service.isXLarge()).toBeFalsy();
    expect(service.isXSmall()).toBeFalsy();
  });
});
