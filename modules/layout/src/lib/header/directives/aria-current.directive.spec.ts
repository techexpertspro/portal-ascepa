import { EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, RouterLinkActive } from '@angular/router';
import { AriaCurrentDirective } from './aria-current.directive';

describe('AriaCurrentDirective', () => {
  let directive: AriaCurrentDirective;
  let routerLinkActive: { isActive: boolean };

  beforeEach(() => {
    routerLinkActive = { isActive: false };

    TestBed.configureTestingModule({
      providers: [
        { provide: RouterLinkActive, useValue: routerLinkActive },
        { provide: Router, useValue: {} },
      ],
    });

    // Create directive within injection context
    directive = runInInjectionContext(
      TestBed.inject(EnvironmentInjector),
      () => new AriaCurrentDirective(),
    );
  });

  it('should return null when inactive', () => {
    routerLinkActive.isActive = false;
    expect(directive.ariaCurrent).toBeNull();
  });

  it('should return "page" when active', () => {
    routerLinkActive.isActive = true;
    expect(directive.ariaCurrent).toBe('page');
  });
});
