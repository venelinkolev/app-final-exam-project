import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 25) {
      return `${value.slice(0, 10)}...`;
    }
    return value;
  }
}
