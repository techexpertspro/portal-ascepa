import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointService } from '@portal-ascepa/shared-ui';
import { ABOUT_US, MAGIC_NUMBERS } from './about-us.constants';

@Component({
  selector: 'lib-about-us',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-us.component.html',
  styleUrls: ['./handset-portrait.scss', './default.scss'],
})
export class AboutUsComponent {
  protected readonly aboutUs = ABOUT_US;
  protected readonly magicNumber = MAGIC_NUMBERS;
  protected readonly breakpointObserver = inject(BreakpointService);
}
