import{PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'diffPercentage'
})

export class DiffPercentage implements PipeTransform{

    transform(old:number, newa:number = 2):number{
      let r= newa - old;
      r= (r/ old)* 100;
      return (r);             
      
    }
}