import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointService, SectionContent } from '@portal-ascepa/shared-ui';
import { MAGIC_NUMBERS } from './join-us.constants';

@Component({
  selector: 'lib-join-us',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatButtonModule],
  templateUrl: './join-us.component.html',
  styleUrls: ['./handset-portrait.scss', './default.scss'],
})
export class JoinUsComponent {
  @Input() public content!: Partial<SectionContent>;

  protected readonly magicNumber = MAGIC_NUMBERS;
  protected readonly breakpointObserver = inject(BreakpointService);

  public learnMore(): void {
    // eslint-disable-next-line no-console
    console.log('click saiba mais');
  }
}
