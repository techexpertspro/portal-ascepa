import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AnchorComponent, PaginationComponent } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-news',
  standalone: true,
  imports: [CommonModule, AnchorComponent, PaginationComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  totalPages = signal(10);
  currentPage = signal(1);
  maxVisible = signal(5);

  changePage(page: number) {
    this.currentPage.update(() => page);
  }
}
