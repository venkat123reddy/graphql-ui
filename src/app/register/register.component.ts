import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterOutlet,CommonModule],
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

  constructor(private userService:UserServiceService) {

  }

  submitForm(form: any): void {
    console.log('Form data:', this.userDetails);
    this.userService.createuser(this.userDetails);
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }
  api() {
    this.userService.getHttp();
  }

}
