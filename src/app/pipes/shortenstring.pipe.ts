import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenstring'
})
export class ShortenstringPipe implements PipeTransform {

   transform(value: any): any {
    if (value.length > 10) {
      return value.substr(12, 19) + '...';
    }
    return value;
  }

}
