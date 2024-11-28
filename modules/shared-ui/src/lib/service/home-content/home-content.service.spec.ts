import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { homeContentMock } from '../../mock/home-content.mock';
import { HomeContentService } from './home-content.service';

describe('HomeContentService', () => {
  let service: HomeContentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HomeContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get home content', () => {
    service.getHomeContent().subscribe({
      next: (res) => expect(res).toEqual(homeContentMock),
    });

    const backend = httpMock.expectOne(service['url']);
    expect(backend.request.method).toBe('GET');
    backend.flush(homeContentMock);
  });
});
