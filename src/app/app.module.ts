import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListTodoComponent, FormTodoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
