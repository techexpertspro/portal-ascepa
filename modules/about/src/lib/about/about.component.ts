import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { JoinUsComponent } from '@portal-ascepa/home';
import { BreakpointService } from '@portal-ascepa/shared-ui';
import { CardComponent } from '../components/card/card.component';
import { About } from '../interfaces/about.type';
import { mockAbout } from '../mocks/about.mock';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CommonModule, MatGridListModule, CardComponent, JoinUsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly breakpointObserver = inject(BreakpointService);

  aboutDetail: About = mockAbout;
}
