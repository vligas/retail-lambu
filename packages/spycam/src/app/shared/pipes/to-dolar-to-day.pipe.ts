import{PipeTransform,Pipe} from '@angular/core';

@Pipe({
    name:'toDolarToDay'
})

export class ToDolarToDay implements PipeTransform{

    transform(bsPrice:number, dolarToDay:number):number{
      let r= bsPrice/ dolarToDay;
      
      return ((Number.isNaN(r))? 0 : r);             
    }
}