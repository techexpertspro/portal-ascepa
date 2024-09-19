import { TestBed } from '@angular/core/testing';

import { GlobalKeydownService } from './global-keydown.service';

describe('GlobalKeydownService', () => {
  let service: GlobalKeydownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalKeydownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
