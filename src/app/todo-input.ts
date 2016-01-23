import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-input',
  template: `
    <form (submit)="onSubmit()">
      Add: <input #todoInput [(ngModel)]="value">
    </form>
  `
})
export class TodoInput {
  constructor(private todoService: TodoService) {}

  value = '';

  onSubmit() {
    this.todoService.add(this.value);
    this.value = '';
  }
}
