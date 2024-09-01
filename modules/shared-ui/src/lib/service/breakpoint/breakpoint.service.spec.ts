import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
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
          breakpoints: {
            '(orientation: portrait)': true,
            '(orientation: landscape)': true,
            '(max-width: 320px)': true,
            '(min-width: 321px) and (max-width: 375px)': true,
            '(min-width: 376px) and (max-width: 411px)': true,
            '(min-width: 412px) and (max-width: 425px)': true,
            '(min-width: 426px) and (max-width: 768px)': true,
            '(min-width: 769px) and (max-width: 1024px)': true,
            '(min-width: 1025px) and (max-width: 1280px)': true,
            '(min-width: 1281px) and (max-width: 1366px)': true,
            '(min-width: 1367px) and (max-width: 1440px)': true,
            '(min-width: 1441px) and (max-width: 1920px)': true,
          },
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

  it('should test all MediaQuery options', () => {
    service['layoutChanges'](); // Força a reatividade ao sinal

    expect(service.isPortrait()).toBeTruthy;
    expect(service.isLandscape()).toBeTruthy;
    expect(service.isSmallScreen()).toBeTruthy;
    expect(service.isIphone()).toBeTruthy;
    expect(service.isAndroid()).toBeTruthy;
    expect(service.isLargeMobile()).toBeTruthy;
    expect(service.isTablet()).toBeTruthy;
    expect(service.isIpad()).toBeTruthy;
    expect(service.isLaptop()).toBeTruthy;
    expect(service.isSmallLaptop()).toBeTruthy;
    expect(service.isDesktop()).toBeTruthy;
    expect(service.isWideDesktop()).toBeTruthy;
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
