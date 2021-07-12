import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != undefined) {

      return value.filter((data) => {
        return (data.name.includes(args) || data.email.includes(args) || data.body.includes(args))
      });
    } else {
      return value;
    }
  }

}
