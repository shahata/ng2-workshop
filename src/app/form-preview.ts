import {Component} from 'angular2/core';
import {FormService} from './form-service';
import {FormControlComponent} from './form-control';

@Component({
  selector: 'form-preview',
  directives: [FormControlComponent],
  template: `
    <h1>{{formService.title}}!</h1>
    <form (submit)="onSubmit()">
      <div *ngFor="#control of formService.controls">
        <form-control [preview]="true" [control]="control" [(value)]="values[control.id]"></form-control>
      </div>
      <br/>
      <button>Submit</button>
    </form>
    <div *ngIf="showValues">
      <hr/>
      <h1>Submit Data</h1>
      {{values | json}}
      <br/><br/>
      <button (click)="onClear()">Clear</button>
    </div>
  `
})
export class FormPreview {
  showValues;
  values = {};

  constructor(private formService: FormService) {}

  onSubmit() {
    this.showValues = true;
  }

  onClear() {
    this.showValues = false;
    this.values = {};
  }

}
