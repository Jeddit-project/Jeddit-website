import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 999) {
      return (Math.floor(value / 100) / 10).toFixed(1) + 'k';
    }
    return value.toString();
  }
}
