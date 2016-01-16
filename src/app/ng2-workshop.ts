import {Component} from 'angular2/core';


@Component({
  selector: 'ng2-workshop-app',
  providers: [],
  templateUrl: 'app/ng2-workshop.html',
  directives: [],
  pipes: []
})
export class Ng2WorkshopApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
