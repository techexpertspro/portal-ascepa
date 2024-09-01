import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';
import { MediaQueryChanges } from '../../model/media-query.model';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly layoutChanges = toSignal<MediaQueryChanges>(
    this.breakpointObserver
      .observe([
        '(orientation: portrait)',
        '(orientation: landscape)',
        '(max-width: 320px)', // Small screens
        '(min-width: 321px) and (max-width: 375px)', // iPhone
        '(min-width: 376px) and (max-width: 411px)', // Android
        '(min-width: 412px) and (max-width: 425px)', // Large mobiles
        '(min-width: 426px) and (max-width: 768px)', // Tablets
        '(min-width: 769px) and (max-width: 1024px)', // iPad
        '(min-width: 1025px) and (max-width: 1280px)', // Laptops
        '(min-width: 1281px) and (max-width: 1366px)', // Small laptops
        '(min-width: 1367px) and (max-width: 1440px)', // Desktops
        '(min-width: 1441px) and (max-width: 1920px)', // Wide desktops
      ])
      .pipe(
        map(({ breakpoints }) => breakpoints as MediaQueryChanges),
        distinctUntilChanged(),
      ),
  );

  public readonly isPortrait = computed(
    () => this.layoutChanges()?.['(orientation: portrait)'] ?? false,
  );
  public readonly isLandscape = computed(
    () => this.layoutChanges()?.['(orientation: landscape)'] ?? false,
  );
  public readonly isSmallScreen = computed(
    () => this.layoutChanges()?.['(max-width: 320px)'] ?? false,
  );
  public readonly isIphone = computed(
    () =>
      this.layoutChanges()?.['(min-width: 321px) and (max-width: 375px)'] ??
      false,
  );
  public readonly isAndroid = computed(
    () =>
      this.layoutChanges()?.['(min-width: 376px) and (max-width: 411px)'] ??
      false,
  );
  public readonly isLargeMobile = computed(
    () =>
      this.layoutChanges()?.['(min-width: 412px) and (max-width: 425px)'] ??
      false,
  );
  public readonly isTablet = computed(
    () =>
      this.layoutChanges()?.['(min-width: 426px) and (max-width: 768px)'] ??
      false,
  );
  public readonly isIpad = computed(
    () =>
      this.layoutChanges()?.['(min-width: 769px) and (max-width: 1024px)'] ??
      false,
  );
  public readonly isLaptop = computed(
    () =>
      this.layoutChanges()?.['(min-width: 1025px) and (max-width: 1280px)'] ??
      false,
  );
  public readonly isSmallLaptop = computed(
    () =>
      this.layoutChanges()?.['(min-width: 1281px) and (max-width: 1366px)'] ??
      false,
  );
  public readonly isDesktop = computed(
    () =>
      this.layoutChanges()?.['(min-width: 1367px) and (max-width: 1440px)'] ??
      false,
  );
  public readonly isWideDesktop = computed(
    () =>
      this.layoutChanges()?.['(min-width: 1441px) and (max-width: 1920px)'] ??
      false,
  );
}
