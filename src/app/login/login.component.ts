import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';
import { HomePageComponent } from "../home-page/home-page.component";
import { Router } from '@angular/router';
import {MatDialogModule,MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CurrentUser } from '../CurrentUser';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogModule,FormsModule, CommonModule, MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, HomePageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    userName:'',
    password:'',
    customerType:''
  } 

  errorFlag:string='';
  constructor(private userService:UserServiceService,
              private router:Router,
              private dialog :MatDialog,
              private dialogRef: MatDialogRef<LoginComponent>,
              private currentUser:CurrentUser
  ) {

  }
  async login() {  
  console.log("Login Componenet")
  let flag =  await this.userService.uservalidation(this.user); 
  console.log(flag)
  if(!flag.validation) {
    this.errorFlag="Invalid Credentials";
    console.log("error")
  }
  else {
  this.errorFlag="Success"
  this.currentUser.setDetails(this.user.customerType,this.user.userName);
  this.dialogRef.close({data:this.user})
  }
  
}
}
