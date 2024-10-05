import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BreakpointService, ButtonComponent } from '@portal-ascepa/shared-ui';
import { JOIN_US, MAGIC_NUMBERS } from './join-us.constants';

@Component({
  selector: 'lib-join-us',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent],
  templateUrl: './join-us.component.html',
  styleUrls: ['./handset-portrait.component.scss', './default.component.scss'],
})
export class JoinUsComponent {
  protected readonly joinUs = JOIN_US;
  protected readonly magicNumber = MAGIC_NUMBERS;
  protected readonly breakpointObserver = inject(BreakpointService);

  public learnMore(): void {
    // eslint-disable-next-line no-console
    console.log('click saiba mais');
  }
}
