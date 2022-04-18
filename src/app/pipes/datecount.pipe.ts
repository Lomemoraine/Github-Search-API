import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(created_at: any): number {
    let todaysdate:any=new Date();
    let todayWithNoTime:any = new Date(todaysdate.getFullYear(), todaysdate.getMonth(), todaysdate.getDate())
    var dateDifference=Math.abs(created_at - todayWithNoTime);
    var dateSeconds = dateDifference*0.001;
    const seconds = 86400;
    var daysPassed= Math.floor(dateSeconds/seconds);

    return daysPassed;
  }

}
