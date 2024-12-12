import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';
import {MatDialogModule,MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userDetails = {
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    age: null,
    gender: '',
    password:'',
    customerType:''
  };
  isSubmit:boolean=false;

  constructor(private userService:UserServiceService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {

  }

  login() {

    this.dialogRef.close({data:{status:true}});
    
  }

  
  async submitForm(form: any) {
    console.log('Form data:', this.userDetails);
    await this.userService.createuser(this.userDetails);
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
    this.isSubmit=true;
  }
  api() {
    this.userService.getHttp();
  }

}
