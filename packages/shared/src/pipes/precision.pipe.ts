import{PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'precision'
})

export class Precision implements PipeTransform{

    transform(n:number, precision:number = 2):number{
      let r: number= parseFloat((n)? (n).toFixed(precision): '0.000');
      // let r: string= (n).toFixed(precision);
      return (r);             
      
    }
}