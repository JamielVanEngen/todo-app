import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  todoForm = this.formBuilder.group({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    dueDate: new FormControl(moment(), [
      this.dueDateValidator
    ]) 
  });
  model: Todo = new Todo(0, false, '', moment());
  showModel = false;

  constructor(
    private route: ActivatedRoute,
    private service: TodoService,
    private router: Router,
    private formBuilder: FormBuilder,
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
        this.showModel = true;
        this.todoForm.setValue({
          task: this.model.Task,
          dueDate: this.model.DueDate,
        });
      }
    }
  }

  dueDateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    let isDateTheSameOrAfterToday = moment().startOf('day').isSameOrBefore(control.value.startOf('day'));
    if (control.value !== undefined && (isNaN(control.value) || !isDateTheSameOrAfterToday)) {
      return {dueDate: true};
    }
    else {
      return null;
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.model.Task = this.todoForm.value.task
      this.model.DueDate = this.todoForm.value.dueDate
      try {
        this.service.editTodo(this.model);
        this.router.navigate(['todos'])
      }
      catch(e) {
        console.log(e)
      }
    }
  }
  
  back() {
    this.location.back();
  }

  isFormValid(): boolean {
    for (let controlName in this.todoForm.controls) {
      if (this.todoForm.controls[controlName].invalid) {
        return false;
      }
    }
    return true;
  }
}
