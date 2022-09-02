import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User } from 'src/app/Model/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userauthicated:boolean=false;
  login=new  BehaviorSubject(true);

   change() {
    this.login.next(!this.login.getValue());
    console.log("login:",this.login.value);
    
  }

  setUsers(user:User){
    let users:User[]=this.getUsers();
    users.push(user);
    localStorage.setItem('Users',JSON.stringify(users))
  }
  getUsers():User[]{
   let UserString= localStorage.getItem('Users')
   let Data=[]
   if(UserString)
   Data=JSON.parse(UserString)
   console.log('users:',Data);   
   return Data
  }

  getTotalUsers(){
    let data=this.getUsers()
    return data.length    
  }
  aunthicate(userName:string,pass:string):number{
    let users:User[]=this.getUsers();
    
    for(let i=0;i<users.length;i++)
    {
    if(users[i].email==userName && users[i].password==pass)
    {
     this.userauthicated=true;
     return users[i].id;
    }
   }
    return 0;

  }
}
