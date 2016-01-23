import {ViewEncapsulation, Component} from 'angular2/core';
import {TodoService, TodoItem} from './todo-service';
import {SearchPipe} from './search-pipe';

@Component({
  selector: 'todo-list',
  encapsulation: ViewEncapsulation.Native,
  pipes: [SearchPipe],
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `],
  template: `
    Search: <input [(ngModel)]="searchTerm">
    <ul>
      <li *ngFor="#todo of todoService.todos | search:searchTerm">
        <span [ngClass]="{completed: todo.completed}">{{todo.description}}</span>
        <button (click)="toggleCompleted(todo)">toggle</button>
      </li>
    </ul>
  `
})
export class TodoList {
  constructor(private todoService: TodoService) {}

  toggleCompleted(todo: TodoItem) {
    todo.completed = !todo.completed;
  }
}
