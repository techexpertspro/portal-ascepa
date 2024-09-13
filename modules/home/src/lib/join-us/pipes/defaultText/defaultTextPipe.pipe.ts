import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultText',
  standalone: true,
})
export class DefaultTextPipe implements PipeTransform {
  transform(value: string | null | undefined, defaultText: string): string {
    return value ? value : defaultText;
  }
}
