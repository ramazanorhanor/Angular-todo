import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoUpdateComponent } from './pages/todo-update/todo-update.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoUpdateComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:'Base_Api_Url',useValue:environment.baseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
