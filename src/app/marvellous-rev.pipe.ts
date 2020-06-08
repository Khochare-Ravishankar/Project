import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousRev'
})
export class MarvellousRevPipe implements PipeTransform {
  public no: number;
  public arr: string;
  transform(value: string, ...args): string {
    this.arr = '';
    for (let i = value.length - 1; i >= 0; i--){
      this.arr += value[i];
    }
    return this.arr;

  }

}
