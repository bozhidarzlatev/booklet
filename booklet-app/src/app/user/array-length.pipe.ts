import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayLength',
  standalone: true
})
export class ArrayLengthPipe implements PipeTransform {

  transform(arr: string[],): number {
    return arr.length;
  }

}
