import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../components/card/card.component';
import { About } from '../interfaces/about.type';
import { mockAbout } from '../mocks/about.mock';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CommonModule, MatGridListModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  items = [1, 2, 3, 4];
  gridCols = 4; // Começa com 4 colunas

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;

    if (width > 1024) {
      this.gridCols = 4; // 4 colunas para telas grandes
    } else if (width > 768) {
      this.gridCols = 2; // 2 colunas para tablets
    } else {
      this.gridCols = 1; // 1 coluna para celulares
    }
  }

  constructor() {
    this.onResize(); // Garante que a grid seja ajustada ao iniciar
  }
  aboutDetail: About = mockAbout;
}
