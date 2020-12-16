import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'tipoOracion'
})
export class TipoOracionPipe implements PipeTransform {

  transform(value: string): unknown {
    if (value){
    return value.charAt(0).toUpperCase()+value.slice(1);
  }
}
}
