import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { SocialMediaService } from './social-media.service';

describe('SocialMediaService', () => {
  let service: SocialMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SocialMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
