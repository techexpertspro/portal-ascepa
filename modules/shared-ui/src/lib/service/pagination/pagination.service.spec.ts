import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    service = new PaginationService();
  });

  describe('getVisiblePages', () => {
    it('should return [1] for a single page', () => {
      expect(service.getVisiblePages(1, 1)).toEqual([1]);
    });

    it('should return all pages when total pages <= maxVisible', () => {
      expect(service.getVisiblePages(1, 5, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return [1, 2, "...", 9, 10] when current page is near start', () => {
      expect(service.getVisiblePages(1, 10, 5)).toEqual([1, 2, 3, '...', 10]);
    });

    it('should return [1, "...", 7, 8, 9, 10] when current page is near end', () => {
      expect(service.getVisiblePages(9, 10, 5)).toEqual([1, '...', 8, 9, 10]);
    });

    it('should return [1, "...", 4, 5, 6, "...", 10] when current page is in the middle', () => {
      expect(service.getVisiblePages(5, 10, 5)).toEqual([
        1,
        '...',
        4,
        5,
        6,
        '...',
        10,
      ]);
    });

    it('should handle edge case where last 5 pages remain', () => {
      expect(service.getVisiblePages(7, 10, 5)).toEqual([
        1,
        '...',
        6,
        7,
        8,
        '...',
        10,
      ]);
    });

    it('should handle lower maxVisible correctly', () => {
      expect(service.getVisiblePages(5, 10, 4)).toEqual([
        1,
        '...',
        4,
        5,
        6,
        '...',
        10,
      ]);
    });
  });

  describe('validatePage', () => {
    it('should return page if within range', () => {
      expect(service.validatePage(3, 5)).toBe(3);
    });

    it('should clamp to minimum of 1', () => {
      expect(service.validatePage(-1, 5)).toBe(1);
      expect(service.validatePage(0, 5)).toBe(1);
    });

    it('should clamp to maximum of totalPages', () => {
      expect(service.validatePage(6, 5)).toBe(5);
      expect(service.validatePage(100, 5)).toBe(5);
    });
  });
});
