import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { About } from '../interfaces/about.type';
import { mockAbout } from '../mocks/about.mock';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutDetail: About = mockAbout;
}
