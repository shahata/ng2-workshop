import {Injectable} from 'angular2/core';

export class TodoItem {
  constructor (public description: string,
               public completed: boolean) {}
}

@Injectable()
export class TodoService {
  todos: TodoItem[] = [
    new TodoItem('aaa', false),
    new TodoItem('bbb', false),
    new TodoItem('ccc', true),
    new TodoItem('ddd', true),
  ];

  add(description: string) {
    this.todos = this.todos.concat(new TodoItem(description, false));
  }
}
