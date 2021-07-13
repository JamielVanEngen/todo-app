import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList: Todo[] = this.service.getAllTodos();
  displayedColumns: string[] = ['done', 'task', 'dueDate', 'edit', 'delete'];

  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
  }

  isDoneChanged(todo: Todo, newVal: boolean) {
    todo.Done = newVal;
    this.service.editTodo(todo)
  }
}
