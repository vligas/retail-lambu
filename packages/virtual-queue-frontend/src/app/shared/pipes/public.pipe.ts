import{PipeTransform,Pipe} from '@angular/core';
import { environment } from '@frontend/environments/environment';

@Pipe({
    name:'public'
})
export class PublicPipe implements PipeTransform{

    transform(path: string) :string{
      return `${environment.apiUrl}/public/${path}`;
    }
}