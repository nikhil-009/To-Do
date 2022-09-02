import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Tasks } from 'src/app/Model/Tasks';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent   {
 
  dat:Date=new Date()
  @Input() public data:Tasks= {
    name: '',
    description: '',
    duration: 0,
    dueDate:0,
    status:''
  };
  public open:string=''
  @Input() public userid!:number;
  @Input() public borderTop!: boolean;
  @Input() public dataIndex!:number;
  @Output() dataChange=new EventEmitter<string>()
  constructor(private dataservice:DataService,private notificationService: NotificationService){  
    
  }

  public getDetails() {
    this.open='dialog'
  }
  close(){
    this.open=''
  }
  editDetails(){
    this.open='edit'
    this.dat=new Date(this.data.dueDate)    
  }
  removeTask(){
    this.open='remove'
  }
  action(act:string){
   switch (act) {
    case 'update':
      this.data.dueDate=this.dat.getTime()
      this.dataservice.editDetails(this.data,this.dataIndex,this.userid)
      this.show("Task Updated");
      break;
    case 'remove':
      this.dataservice.removeData(this.dataIndex,this.userid)
      this.show("Task Deleted");
      this.dataChange.emit('dataChanged')
      break;   
    default:
      this.close()
      break;
   }    
    this.close()    
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
