import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {map, Observable} from 'rxjs';
import { TodoUpdate } from '../models/todo-update';
@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(
    private http: HttpClient,
    @Inject('Base_Api_Url') private baseUrl: string
  ) {}
  getAll() {
    return this.http.get<Todo[]>(`${this.baseUrl}/api/todos`);
  }
  getById(id:number){
   return  this.http.get<Todo>(`${this.baseUrl}/api/todos/${id}`)
  }

  add(todo:Todo):Observable<boolean>{
    return this.http.post<Response>(`${this.baseUrl}/api/add`,todo,{observe:'response'}).pipe(map((res:HttpResponse<Response>)=>res.status==201))
  }
  delete(id:number):Observable<boolean>{
    return this.http.delete<Response>(`${this.baseUrl}/api/todos/${id}`,{observe:'response'}).pipe(map((res:HttpResponse<Response>)=>res.status==204))
  }
  update(todoUpdate:TodoUpdate){
    return this.http.put<Response>(`${this.baseUrl}/api/todos/${todoUpdate.id}`,todoUpdate,{observe:'response'}).pipe(map((res:HttpResponse<Response>)=>res.status==204))
  }
  isCompleted(id:number){
    return this.http.put<Response>(`${this.baseUrl}/api/todos/IsCompleted/${id}`,{},{observe:'response'}).pipe(map((res:HttpResponse<Response>)=>res.status==204))
  }
}
