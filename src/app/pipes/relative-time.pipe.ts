import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: number): string {
    const sPerMinute = 60;
    const sPerHour = sPerMinute * 60;
    const sPerDay = sPerHour * 24;
    const sPerMonth = sPerDay * 30;
    const sPerYear = sPerDay * 365;

    const current = Date.now() / 1000;
    const elapsed = current - value;

    if (elapsed < sPerMinute) {
      return Math.round(elapsed) + ' seconds ago';
    } else if (elapsed < sPerHour) {
      return Math.round(elapsed / sPerMinute) + ' minutes ago';
    } else if (elapsed < sPerDay ) {
      return Math.round(elapsed / sPerHour ) + ' hours ago';
    } else if (elapsed < sPerMonth) {
      return Math.round(elapsed / sPerDay) + ' days ago';
    } else if (elapsed < sPerYear) {
      return Math.round(elapsed / sPerMonth) + ' months ago';
    } else {
      return Math.round(elapsed / sPerYear ) + ' years ago';
    }
  }

}
