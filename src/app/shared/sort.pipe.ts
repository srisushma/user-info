import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, doSort: boolean): any {
    if(value) {      
      if (!doSort) {
        return value.sort((a: any, b: any) => a['firstName'].toLowerCase() > b['firstName'].toLowerCase() ? -1 : 1).reverse();
      }
      return value.sort((a: any, b: any) => a['firstName'].toLowerCase() > b['firstName'].toLowerCase() ? -1 : 1);
    }
    else {
      return value;
    }
  }
}
