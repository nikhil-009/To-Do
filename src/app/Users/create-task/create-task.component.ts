import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationService } from '@progress/kendo-angular-notification';
import { getLogin } from 'src/app/login/State/user.selector';
import { Tasks } from 'src/app/Model/Tasks';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  @Output() dataChange=new EventEmitter<string>()
  dat:Date=new Date()
  task:Tasks={
   name: '',
   description: '',
   duration: 0,
   dueDate: 0,
   status:'ongoing'
 }
 user!:number

  constructor(private dataService:DataService,private store:Store,private notificationService: NotificationService) {
    //debugger;
     this.store.select(getLogin).subscribe(res=>{
      this.user=res
     })
    console.log('userId',this.user);
    
   }

  ngOnInit(): void {
  }
  onCreate(){    
    this.task.dueDate=this.dat.getTime()
    //console.log("data:",this.task);
    this.dataService.setData(this.task,this.user)
    this.dataChange.emit('dataChanged') 
    this.show("Task Created") 
    this.task={
      name: '',
      description: '',
      duration: 0,
      dueDate: 0,
      status:'ongoing'
    }  
  }
  public show(msg:string): void {
    this.notificationService.show({
      content: msg,
      hideAfter: 600,
      position: { horizontal: "center", vertical: "top" },
      animation: { type: "fade", duration: 400 },
      type: { style: "info", icon: true },
    });
  }

}
