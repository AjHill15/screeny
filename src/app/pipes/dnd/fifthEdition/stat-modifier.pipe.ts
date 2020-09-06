import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statModifier'
})
export class StatModifierPipe implements PipeTransform {

  transform(value:number): number {
    var modifier:number;
    var baseNumber: number = 10;
    modifier = Math.floor((value - baseNumber)/2);
    return modifier;
  }

}
