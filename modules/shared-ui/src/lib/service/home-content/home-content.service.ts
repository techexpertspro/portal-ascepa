import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentResponse } from '../../model/content-response.model';

@Injectable({
  providedIn: 'root',
})
export class HomeContentService {
  private http = inject(HttpClient);
  private readonly url = 'https://faux-api.com/api/v1/home_8485453331131321';

  public getHomeContent(): Observable<ContentResponse> {
    return this.http.get<ContentResponse>(this.url);
  }
}
