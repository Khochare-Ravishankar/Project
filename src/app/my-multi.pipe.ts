import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMulti'
})
export class MyMultiPipe implements PipeTransform {
  public no: number;
  transform(value: number, ...args): number {

    this.no = value * args[0];
    return this.no;
  }

}
