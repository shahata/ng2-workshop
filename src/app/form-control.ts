import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FormService, FormControl} from './form-service';

@Component({
  selector: 'form-primitive-text',
  template: `
    <div *ngIf="preview">
      <input placeholder="Your answer" [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
    </div>
    <div *ngIf="!preview">
      ...
    </div>
  `
})
export class FormPrimitiveInput {
  @Input() preview: boolean;
  @Input() value;
  @Output() valueChange = new EventEmitter();
  @Input() control;
}

@Component({
  selector: 'form-primitive-select',
  template: `
    <div *ngIf="preview">
      <select [ngModel]="value" (ngModelChange)="valueChange.emit($event)">
        <option *ngFor="#option of control.options" [value]="option.text">{{option.text}}</option>
      </select>
    </div>
    <div *ngIf="!preview">
      <div *ngFor="#option of control.options">
        <input [(ngModel)]="option.text">
        <button (click)="removeOption(option)">Remove</button>
      </div>
      <button (click)="addOption()">Add option</button>
    </div>
  `
})
export class FormPrimitiveSelect {
  @Input() preview: boolean;
  @Input() value;
  @Output() valueChange = new EventEmitter();
  @Input() control;

  removeOption(option) {
    this.control.options = this.control.options.filter(o => o === option);
  }

  addOption() {
    this.control.options = this.control.options.concat({text: 'Untitled Option'});
  }
}

@Component({
  selector: 'form-primitive-radio',
  template: `
    <div *ngIf="preview">
      <div *ngFor="#option of control.options, #i = index">
        <label>
          <input [name]="control.id" type="radio" [value]="option.text" (click)="valueChange.emit(option.text)">
          {{option.text}}
        </label>
      </div>
    </div>
    <div *ngIf="!preview">
      <div *ngFor="#option of control.options">
        <input [(ngModel)]="option.text">
        <button (click)="removeOption(option)">Remove</button>
      </div>
      <button (click)="addOption()">Add option</button>
    </div>
  `
})
export class FormPrimitiveRadio {
  @Input() preview: boolean;
  @Input() value;
  @Output() valueChange = new EventEmitter();
  @Input() control;

  removeOption(option) {
    this.control.options = this.control.options.filter(o => o === option);
  }

  addOption() {
    this.control.options = this.control.options.concat({text: 'Untitled Option'});
  }
}

@Component({
  selector: 'form-control',
  directives: [FormPrimitiveInput, FormPrimitiveSelect, FormPrimitiveRadio],
  template: `
    <div *ngIf="preview">
      <h3>{{control.title}}</h3>
      <div [ngSwitch]="control.type">
        <form-primitive-text *ngSwitchWhen="'text'" [preview]="preview" [control]="control" [value]="value" (valueChange)="valueChange.emit($event)"></form-primitive-text>
        <form-primitive-select *ngSwitchWhen="'select'" [preview]="preview" [control]="control" [value]="value" (valueChange)="valueChange.emit($event)"></form-primitive-select>
        <form-primitive-radio *ngSwitchWhen="'radio'" [preview]="preview" [control]="control" [value]="value" (valueChange)="valueChange.emit($event)"></form-primitive-radio>
      </div>
    </div>
    <div *ngIf="!preview">
      Question title <input [(ngModel)]="control.title">
      <select [(ngModel)]="control.type">
        <option *ngFor="#t of formService.controlTypes" [value]="t">{{t}}</option>
      </select>
      <button (click)="onRemove.emit(control)">Remove</button>
      <div [ngSwitch]="control.type">
        <form-primitive-text *ngSwitchWhen="'text'" [preview]="preview" [control]="control"></form-primitive-text>
        <form-primitive-select *ngSwitchWhen="'select'" [preview]="preview" [control]="control"></form-primitive-select>
        <form-primitive-radio *ngSwitchWhen="'radio'" [preview]="preview" [control]="control"></form-primitive-radio>
      </div>
    </div>
  `
})
export class FormControlComponent {
  @Input() control: FormControl;
  @Input() preview: boolean;
  @Output() onRemove = new EventEmitter();

  @Input() value;
  @Output() valueChange = new EventEmitter();

  constructor(private formService: FormService) {}
}
