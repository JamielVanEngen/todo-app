import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';
import { DeletetodoComponent } from './deletetodo/deletetodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { LandingComponent } from './landing/landing.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'todos/create', component: CreatetodoComponent},
  {path: 'todos/edit/:id', component: EdittodoComponent},
  {path: 'todos/delete/:id', component: DeletetodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
