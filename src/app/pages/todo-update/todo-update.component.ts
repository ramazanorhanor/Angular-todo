import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoUpdate } from 'src/app/models/todo-update';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  todoForm=new FormGroup({
  content:new FormControl(''),
  id:new FormControl(0)
})
idUrl:number=0;
  constructor(private todoService:TodoServiceService,private router:Router,private activatedRouted:ActivatedRoute) { }

  ngOnInit(): void {
    this.idUrl=Number( this.activatedRouted.snapshot.paramMap.get('id')) // url'deki id al 
    this.todoService.getById(this.idUrl).subscribe(x=>{
      this.todoForm.get('content')?.setValue(x.content);
      this.todoForm.get('id')?.setValue(x.id);
    }) // url'yi ilgili service metoduna gönder veriyi al ekrana yerleştir
  }
  update(){
    // ekrandaki veriyi güncelle 
    this.todoService.update(this.todoForm.value as TodoUpdate).subscribe(x=> {
      if(x==true){
        this.router.navigateByUrl("todos")
      }else{
        alert("todo güncellenemedi ");
      }
    })
  }

}
