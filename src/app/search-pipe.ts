import {Pipe} from 'angular2/core';

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform(values, [term]) {
    return values.filter(value => !term || value.description.startsWith(term));
  }
}
