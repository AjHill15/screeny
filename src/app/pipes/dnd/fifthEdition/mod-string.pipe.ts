import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modString'
})
export class ModStringPipe implements PipeTransform {

  transform(value: number): string {
    if(value > 0)
    {
      return '+' + value.toString();
    }
    return value.toString();
  }

}
