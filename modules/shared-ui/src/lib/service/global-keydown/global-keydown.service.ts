import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GlobalKeydownService {
  keydownEvents$: Observable<string>;
  private maxKeyLimit = 4;

  constructor() {
    this.keydownEvents$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
      debounceTime(300),
      filter((event) => !(event.target instanceof HTMLInputElement)),
      filter((event) => {
        const key = parseInt(event.key, 10);
        return /^[1-9]$/.test(event.key) && key <= this.maxKeyLimit;
      }),
      map((event) => event.key),
    );
  }

  public setMaxKeyLimit(limit: number): void {
    this.maxKeyLimit = limit;
  }
}
