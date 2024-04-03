import { Pipe, PipeTransform } from "@angular/core";
import { Addresses } from "@model/addresses";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(values: Addresses[], ...args?: string[]): Addresses[] {
    if (!Array.isArray(values)) {
      return values;
    }
  

  const [query, ...properties]: string[] = args;
  if (query === '' || query.length < 3) return values;

  const lowerQuery = query.toLowerCase();
  const dateQuery = new Date(query);

    if (isNaN(dateQuery.getTime())) {
      return values.filter((item: Addresses) => 
        properties.flat()
        .some((property: string)
        item[property] instanceof Date && item[property].toDateString() === dateQuery.toDateString())
      );
    }
    return null;
  }
}