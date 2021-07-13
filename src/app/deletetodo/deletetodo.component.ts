import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-deletetodo',
  templateUrl: './deletetodo.component.html',
  styleUrls: ['./deletetodo.component.css']
})
export class DeletetodoComponent implements OnInit {
  model: Todo = new Todo(0, false, '', moment());

  constructor(
    private route: ActivatedRoute,
    private service: TodoService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get("id");
    if (idParam === null || Number(idParam) !== NaN) {
      let fetchedTodo = this.service.getTodoById(Number(idParam));
      if (fetchedTodo === undefined) {
        this.router.navigate(["todos"]);
      }
      else {
        this.model = fetchedTodo;
      }
    }
  }
  
  deleteTodo() {
    this.service.deleteTodo(this.model);
    this.router.navigate(['todos'])
  }

  back() {
    this.location.back();
  }
}
