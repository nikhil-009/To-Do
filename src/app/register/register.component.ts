import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model/Users';
import { UserService } from '../Users/Services/user.service';
import { CustomValidators } from './passwordValidater';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public min: Date = new Date(1990, 3, 1);
  public max: Date = new Date(2000, 3, 30);
  registerForm!: FormGroup
  user:User={
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dob: 0,
    password: '',
    id: 0
  }

  constructor(private userService:UserService,private router:Router) {
    this.user.id= this.userService.getTotalUsers()+1
     this.registerForm = new FormGroup({
      firstName: new FormControl('dfgd',Validators.required),
      lastName: new FormControl('sgsdg',Validators.required),
      birthDate: new FormControl(new Date(1994, 5, 11)),
      email: new FormControl('abcd@gmail.com', [Validators.email,Validators.required]),
      password:new FormControl('',Validators.required),
      confirmPassword: new FormControl('',[Validators.required]),
      gender:new FormControl('male',Validators.required)      
    },
    [CustomValidators.MatchValidator('password','confirmPassword')]
    );    
   }
   get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }
  public saveForm(): void {
    this.registerForm.markAllAsTouched();
      this.user.firstName=this.registerForm.value.firstName;
      this.user.lastName=this.registerForm.value.lastName;
      this.user.email=this.registerForm.value.email;
      this.user.dob=this.registerForm.value.birthDate.getTime();
      this.user.gender=this.registerForm.value.gender;  
      this.user.password=this.registerForm.value.password;  
      this.userService.setUsers(this.user)  
      this.router.navigate(['login'])   
       
  }

  public clearForm(): void {
    this.registerForm.reset();
    this.registerForm.controls['birthDate'].setValue(new Date(1996, 10, 11))

  }
}