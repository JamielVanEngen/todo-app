import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './menubar/menubar.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';


import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';


import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TodosComponent } from './todos/todos.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { DeletetodoComponent } from './deletetodo/deletetodo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MenubarComponent,
    AboutComponent,
    ContactComponent,
    TodosComponent,
    CreatetodoComponent,
    EdittodoComponent,
    DeletetodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMomentDateModule,

    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'nl'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
