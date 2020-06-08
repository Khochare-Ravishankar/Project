import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousPipe'
})
export class MarvellousPipePipe implements PipeTransform {

  transform(value: any, value1: any, ...args): any
  {
    let str = value;
    let str1 = value1;
    if(args[0] === "Marvellous")
    {
      str += 'Educating for better tomarrow';
    }
    if(args[1] === "Infosystem")
    {
      str1 += 'India is a best country';
    }
    return str;
  }

}
