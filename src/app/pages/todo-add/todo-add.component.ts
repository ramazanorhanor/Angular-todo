import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
todoForm=new FormGroup({
  content:new FormControl('')
})
  constructor(private todoService:TodoServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  add(){
    this.todoService.add(this.todoForm.value as Todo).subscribe(x=>{
      if(x==true){
        this.router.navigateByUrl("/todos");
      }
    })
  }

}
