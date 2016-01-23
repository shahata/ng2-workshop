import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';

@Component({
  selector: 'todo-app',
  directives: [TodoInput, TodoList],
  template: `
    <todo-input></todo-input>
    <div><todo-list></todo-list></div>
  `
})
export class TodoApp {
}
