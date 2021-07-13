import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    {id: 1, Done: false, Task: "Do the laundry", DueDate: moment()},
    {id: 2, Done: true, Task: "Walk the dog", DueDate: moment()},
    {id: 3, Done: false, Task: "Do the laundry 2", DueDate: moment()},
    {id: 4, Done: false, Task: "Do the laundry 3", DueDate: moment()},
  ];

  constructor() {
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  editTodo(todo: Todo) {
    let foundTodo = this.todos.find(t => t.id === todo.id)
    if (foundTodo === undefined) {
      throw 'No todo found with this id';
    }
    else {
      foundTodo.Task = todo.Task;
      foundTodo.DueDate = foundTodo.DueDate;
    }
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id == id)
  }

  addTodo(task: string, dueDate: moment.Moment): void {
    let id = Math.max(...this.todos.map(i => i.id));
    let newTodo = new Todo(id + 1, false, task, dueDate);
    this.todos.push(newTodo);
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
