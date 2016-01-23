import {Injectable} from 'angular2/core';

export class FormControl {
  type: string = 'text';
  title: string = 'Untitled Question';
  options: any[] = [{text: 'Untitled Option'}];
}

@Injectable()
export class FormService {
  title: string = 'Untitled Form';
  controls: FormControl[] = [];
  controlTypes: string[] = ['text', 'select', 'radio'];

  constructor() {
    this.addControl();
  }

  fixIds() {
    this.controls = this.controls.map((x, i) => Object.assign(x, {id: `input${i + 1}`}));
  }
  addControl() {
    this.controls = this.controls.concat(new FormControl());
    this.fixIds();
  }

  removeControl(control) {
    this.controls = this.controls.filter(x => x !== control);
    this.fixIds();
  }

}
