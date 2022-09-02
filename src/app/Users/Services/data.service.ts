import { Injectable } from '@angular/core';
import { Tasks, UserData } from 'src/app/Model/Tasks';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  setData(Data:any,id:any){
    let isUser=false
    let Task:UserData[]=[{
      id: 0,
      tasks: []
    }] 
    let dat:UserData={
      id: 0,
      tasks: []
    } 
    //debugger;
    let stringData= localStorage.getItem('Data'); 
    if(stringData){
      Task=JSON.parse(stringData);
      console.log("All Data",Task);
      
      for(let i=0;i<Task.length;i++){
        if(Task[i].id===id){
          Task[i].tasks.push(Data)
          isUser=true
        }
      }  
      console.log("length:",Task.length);
    } 
      if(!isUser){
        dat.id=id;
        dat.tasks.push(Data);
        Task.push(dat)
      }        
      localStorage.setItem('Data',JSON.stringify(Task)); 
      
  }

  getData(id:number):UserData{
    let stringData= localStorage.getItem('Data');
    let Task:UserData[]=[{
      id: 0,
      tasks: []
    }] 
    let dat:UserData={
      id: 0,
      tasks: []
    } 
    //debugger;
    if(stringData)
    { Task=JSON.parse(stringData);
      for(let i=0;i<Task.length;i++){
        if(Task[i].id===id){
         dat=Task[i]
        }
      }       
    }
    return dat
  }

  getDataByStatus(status:string,id:number):Tasks[]{
    let DataString= localStorage.getItem('Data')
    let tasks:Tasks[]=[]
    let Task:UserData[]=[{
      id: 0,
      tasks: []
    }] 
    let dat:UserData={
      id: 0,
      tasks: []
    } 
    //debugger;
    if(DataString)
    { Task=JSON.parse(DataString);
      for(let i=0;i<Task.length;i++){
        if(Task[i].id===id){
         dat= Task[i]         
      }       
    }      
   
   tasks= dat.tasks.filter((data:any)=>{
    return data.status===status
   })
   console.log(tasks);  
  }
  return tasks 
}
  editDetails(data:Tasks,index:number,id:number){
    let DataString= localStorage.getItem('Data')
    //let tasks:Tasks[]=[]
    let Task:UserData[]=[{
      id: 0,
      tasks: []
    }] 
    // let dat:UserData={
    //   id: 0,
    //   tasks: []
    // } 
    debugger;
    if(DataString){
      Task=JSON.parse(DataString)
      for(let i=0;i<Task.length;i++){
        if(Task[i].id===id){
         Task[i].tasks[index]=data         
      }
    }  
    localStorage.setItem('Data',JSON.stringify(Task));
   }    
  }
  
  removeData(index:number,id:number){    
     let DataString = localStorage.getItem('Data');
     //let tasks:Tasks[]=[]
    let Task:UserData[]=[{
      id: 0,
      tasks: []
    }] 
  //let task=[];
  debugger;
  if(DataString)
  {
    Task=JSON.parse(DataString);
    for(let i=0;i<Task.length;i++){
      if(Task[i].id===id){
       Task[i].tasks.splice(index,1); 
       Task[i].tasks.push()        
    }    
  }  
  localStorage.setItem('Data',JSON.stringify(Task)); 
  } 
}
 
  
}
