import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PaginationService } from '../service/pagination/pagination.service';

@Component({
  selector: 'lib-pagination',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ascepa-pagination]': 'true',
  },
})
export class PaginationComponent {
  paginationService = inject(PaginationService);

  totalPages = input.required<number>();
  currentPage = input.required<number>();
  maxVisible = input(5);

  pageChange = output<number>();

  visiblePages = computed(() =>
    this.paginationService.getVisiblePages(
      this.currentPage(),
      this.totalPages(),
      this.maxVisible(),
    ),
  );

  changePage(page: number): void {
    const validatedPage = this.paginationService.validatePage(
      page,
      this.totalPages(),
    );

    if (validatedPage !== this.currentPage()) {
      this.pageChange.emit(validatedPage);
    }
  }
}
