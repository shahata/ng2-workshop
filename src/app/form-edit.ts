import {Component} from 'angular2/core';
import {FormService} from './form-service';
import {FormControlComponent} from './form-control';

@Component({
  selector: 'form-edit',
  directives: [FormControlComponent],
  template: `
    Form title <input [(ngModel)]="formService.title">
    <hr/>
    <div *ngFor="#control of formService.controls">
      <form-control [preview]="false" [control]="control"
        (onRemove)="formService.removeControl(control)"></form-control>
      <hr/>
    </div>
    <button (click)="formService.addControl()">Add Control</button>
  `
})
export class FormEdit {
  constructor(private formService: FormService) {}
}
