import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'othersPipe'
})
export class OthersPipePipe implements PipeTransform {

  transform(value: number): any {
    return value + ' $';
  }

}
