import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BreakpointService } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  protected readonly breakpointObserver = inject(BreakpointService);
}
