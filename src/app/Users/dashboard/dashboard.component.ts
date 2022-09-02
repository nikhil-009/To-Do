import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLogin } from 'src/app/login/State/user.selector';
import { appState } from 'src/app/Store/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store:Store<appState>) {
    console.log(('dashboard'));
    this.store.select(getLogin).subscribe((res)=>{
      console.log("state:",res);      
    })
   }

  ngOnInit(): void {
  }

}
