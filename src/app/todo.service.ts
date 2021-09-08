import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  saveTodos(todos: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  deleteTodo(todo: Todo) {
    var todos = this.getAllTodos();
    todos = todos.filter(t => t.id !== todo.id);
    this.saveTodos(todos);
  }

  editTodo(todo: Todo) {
    let todos = this.getAllTodos();
    let foundTodo = todos.find(t => t.id === todo.id)
    if (foundTodo === undefined) {
      throw 'No todo found with this id';
    }
    else {
      foundTodo.Task = todo.Task;
      foundTodo.DueDate = foundTodo.DueDate;
      this.saveTodos(todos);
    }
  }

  getTodoById(id: number): Todo | undefined {
    let todos = this.getAllTodos();
    return todos.find(todo => todo.id == id)
  }

  addTodo(task: string, dueDate: moment.Moment): void {
    let todos = this.getAllTodos();
    let id = Math.max(...todos.map(i => i.id));
    let newTodo = new Todo(id + 1, false, task, dueDate);
    todos.push(newTodo);
    this.saveTodos(todos);
  }

  getAllTodos(): Todo[] {
    let todosJson = JSON.parse(localStorage.getItem("todos")!);
    if (todosJson === null) {
      let emptyTodo: Todo[] = [];
      localStorage.setItem("todos", JSON.stringify(emptyTodo))
      return emptyTodo;
    }

    let todos: Todo[] = [];

    for(var i in todosJson) {
      let todoThing = todosJson[i];
      let todo = new Todo(+todoThing["id"], todoThing["Done"] === "true", todoThing["Task"], moment(todoThing["DueDate"]));
      // let todo = new Todo(i["id"], i["isDone"], i["task"], moment(i["dueDate"]))
      todos.push(todo)
    }

    return todos
  }
}
