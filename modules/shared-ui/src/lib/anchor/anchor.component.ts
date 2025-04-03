import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[libAnchor]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.anchor-button]': 'buttonLink()',
    '[class.anchor-button__primary]': "buttonLink() && variant() === 'primary'",
    '[class.anchor-button__secondary]':
      "buttonLink() && variant() === 'secondary'",
  },
})
export class AnchorComponent {
  buttonLink? = input<boolean>(false);
  variant? = input<'primary' | 'secondary'>('primary');
}
