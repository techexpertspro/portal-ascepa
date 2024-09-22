import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JOIN_US, MAGIC_NUMBERS } from './join-us.constants';

@Component({
  selector: 'lib-join-us',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
})
export class JoinUsComponent {
  protected readonly joinUs = JOIN_US;
  protected readonly magicNumber = MAGIC_NUMBERS;

  public learnMore(): void {
    // eslint-disable-next-line no-console
    console.log('click saiba mais');
  }
}
