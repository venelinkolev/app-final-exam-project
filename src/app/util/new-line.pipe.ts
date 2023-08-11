import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLine',
})
export class NewLinePipe implements PipeTransform {
  transform(value: string): string[] {
    return value.split('\n');
  }
  // transform(value: string): string {
  //   return value.replace(/\n/g, '<br />');
  // }
}
