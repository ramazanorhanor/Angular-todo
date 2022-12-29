import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoList:Todo[]=[];
  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
this.load()
  }
  load(){
    this.todoService.getAll().subscribe(x=>this.todoList=x)

  }
  delete(id:number){
    this.todoService.delete(id).subscribe(x=>{
      if(x==true){
        alert("silme işlemi tamalandı")
        this.load()
      }
      else{
        alert("silinemedi başarısız")
      }
    })
  }
  isCompleted(id:number){
    this.todoService.isCompleted(id).subscribe(x=> {
      if(x==true){
        let index=this.todoList.findIndex(x=>x.id==id)
        this.todoList[index].isCompleted=!this.todoList[index].isCompleted;
      }
    })
  }

}
