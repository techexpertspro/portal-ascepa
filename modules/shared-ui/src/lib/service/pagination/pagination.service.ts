import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  /**
   * Calculates the visible page numbers with ellipsis logic
   * @param currentPage The currently active page
   * @param totalPages The total number of pages
   * @param maxVisible Maximum number of page buttons to show (default: 5)
   * @returns Array of page numbers with possible '...' for gaps
   */
  getVisiblePages(
    currentPage: number,
    totalPages: number,
    maxVisible = 5,
  ): (number | string)[] {
    if (totalPages <= 1) return [1];

    const pages: (number | string)[] = [];
    const visibleCount = maxVisible - 2; // Account for first & last pages

    // Always include first and last pages
    pages.push(1);

    // Case when total pages are within maxVisible, no ellipsis needed
    if (totalPages <= maxVisible) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Define range of middle pages
    if (currentPage <= visibleCount) {
      for (let i = 2; i <= visibleCount; i++) {
        pages.push(i);
      }
      pages.push('...');
    } else if (currentPage >= totalPages - (visibleCount - 1)) {
      pages.push('...');
      for (let i = totalPages - (visibleCount - 1); i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push('...');
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push('...');
    }

    pages.push(totalPages);
    return pages;
  }

  /**
   * Validates and returns a safe page number
   * @param page The requested page number
   * @param totalPages The total number of pages
   * @returns Validated page number (clamped to 1-totalPages range)
   */
  validatePage(page: number, totalPages: number): number {
    return Math.max(1, Math.min(page, totalPages));
  }
}
