import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { BreakpointService } from '@portal-ascepa/shared-ui';
interface BannerImages {
  desktop: string;
  mobile: string;
}
@Component({
  selector: 'lib-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  private readonly breakpointService = inject(BreakpointService);
  public readonly altText = 'Banner principal';

  public readonly bannerImages: BannerImages = {
    desktop: 'banner.svg',
    mobile: 'banner-mb.svg',
  };

  private readonly isMobile = computed(
    () => this.breakpointService.isXSmall() || this.breakpointService.isSmall(),
  );

  currentImage(): string {
    if (this.breakpointService.isXSmall() || this.breakpointService.isSmall()) {
      return 'banner-mb.svg';
    }

    return 'banner.svg';
  }
}
