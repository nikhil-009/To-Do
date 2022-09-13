import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from '../Store/app.state';
import { UserService } from '../Users/Services/user.service';
import { userLogin } from './State/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = 'nikhil@gmail.com';
  password: string = 'nikhil';
  id: number = 1;
  open: boolean = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<appState>
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.id = this.userService.aunthicate(this.userName, this.password);
    if (this.id !== 0) {
      this.userService.change();
      this.store.dispatch(userLogin({ data: this.id }));
      this.router.navigate(['dashboard']);
    } else this.open = true;
  }
  close() {
    this.open = false;
  }
}
