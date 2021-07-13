import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit {
  todoForm = this.formBuilder.group({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    dueDate: new FormControl(moment(), [
      this.dueDateValidator
    ])
  });

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
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
      this.todoService.addTodo(this.todoForm.value.task, this.todoForm.value.dueDate);
      this.router.navigate(["/todos"]) 
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
