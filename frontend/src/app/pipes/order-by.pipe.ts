import { Pipe, PipeTransform } from "@angular/core";
import { Addresses } from "@model/addresses";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): Addresses[] {
    if (!Array.isArray(value)) {
      return value;
    }

    const [property, order='asc']: string[] = args;

    return value.sort((a,b) => {
      const compare = a[property].localeCompare(b[property]);
      return order === 'asc' ? compare : -compare;
    })
  }
  
}