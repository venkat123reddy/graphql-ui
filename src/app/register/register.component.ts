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
    lastName: '',
    firstName:'',
    email: '',
    address: '',
    phoneNumber: '',
    SSN: '',
    password:'',
    customerType:''
  };
  isSubmit:boolean=false;
  submitMessage:string='';
  constructor(private userService:UserServiceService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {

  }

  login() {

    this.dialogRef.close({data:{status:true}});
    
  }

  
  async submitForm(form: any) {
    console.log('Form data:', this.userDetails);
    let data:any = await this.userService.createuser(this.userDetails);
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
    if(data.status==200)
    {
    this.isSubmit=true;
    } else {
      this.submitMessage = data.message
    }
  
  }
  api() {
    this.userService.getHttp();
  }

}
