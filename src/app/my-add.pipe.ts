import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {
  public no: number;
  transform(value: number, ...args): number {
    this.no = value + args[0];
    return this.no;
  }

}
