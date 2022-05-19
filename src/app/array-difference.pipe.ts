import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'arrayDifference'})
export class ArrayDifferencePipe implements PipeTransform {
  transform(array1: any[], array2: any[]): any[] {
    return array2.filter(element => array1.indexOf(element) === -1);
  }
}