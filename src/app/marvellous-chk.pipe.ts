import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {
  public flag = true;
  public i   = 0;
  public str : string;
  transform(value: number, ...args): any {
    if ( args[0] === 'Prime') {
    for ( this.i = 2; this.i <= value / 2; this.i++) {
      if (value % this.i === 0) {
        return "This is not a prime number";
      }
    }
    if ( this.i > value / 2) {
      return "This is prime";
    }
  }
  if (args[0] === 'Even'){
     if ( value % 2 === 0){
      return "This is a Even number";
    }}

    if(args[0]==='Odd'){
      if (value % 2 === 0 ){
        return "This is not a odd number";
      }
      else{
        return " This is a odd number";
      }

    }
    

    }
  }
