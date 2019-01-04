import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue: string): any {
    if (filterValue === '' || value.length === 0) {
      return value;
    }
    let resultArray = [];
    for(let item of value) {
      if(item['userName'].indexOf(filterValue) !== -1 || item['interests'].indexOf(filterValue) !== -1) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
