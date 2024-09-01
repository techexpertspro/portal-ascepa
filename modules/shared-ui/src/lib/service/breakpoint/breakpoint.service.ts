import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, map } from 'rxjs';
import {
  MEDIA_QUERIES,
  MediaQueryChanges,
} from '../../model/media-query.model';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly layoutChanges = toSignal<MediaQueryChanges>(
    this.breakpointObserver.observe(Object.values(MEDIA_QUERIES)).pipe(
      map(({ breakpoints }) => breakpoints as MediaQueryChanges),
      distinctUntilChanged(),
    ),
  );

  public readonly isPortrait = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.PORTRAIT] ?? false,
  );

  public readonly isLandscape = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.LANDSCAPE] ?? false,
  );

  public readonly isSmallScreen = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.SMALL_SCREEN] ?? false,
  );

  public readonly isIphone = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.IPHONE] ?? false,
  );

  public readonly isAndroid = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.ANDROID] ?? false,
  );

  public readonly isLargeMobile = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.LARGE_MOBILE] ?? false,
  );

  public readonly isTablet = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.TABLET] ?? false,
  );

  public readonly isIpad = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.IPAD] ?? false,
  );

  public readonly isLaptop = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.LAPTOP] ?? false,
  );

  public readonly isSmallLaptop = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.SMALL_LAPTOP] ?? false,
  );

  public readonly isDesktop = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.DESKTOP] ?? false,
  );

  public readonly isWideDesktop = computed(
    () => this.layoutChanges()?.[MEDIA_QUERIES.WIDE_DESKTOP] ?? false,
  );
}
