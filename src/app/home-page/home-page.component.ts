import { ProductsCartComponent } from './../products-cart/products-cart.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { RouterLink,RouterOutlet } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CommonModule,MatBadgeModule,RouterOutlet,RouterLink,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule,MatDialogModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isSideNav:boolean;
  isLogged:boolean;
  userid:string;
  userLogger:boolean=false;
  constructor(private dialog :MatDialog){
this.isSideNav = false;
this.isLogged = false;
this.userid = '';
  }

  cartCheck() {
    this.dialog.open(ProductsCartComponent);
  }

  sideNave(){
    this.isSideNav = ! this.isSideNav;
  }

  userprofile() {
    this.dialog.open(UserProfileComponent)
  }
  login() {
    this.dialog.open(LoginComponent)
    .afterClosed()
    .subscribe(res=>{
      console.log("--info--")
      this.isLogged = true;
      this.userid = res.data.userName;
      console.log(res.data);
      console.log(this.userid);
    })
  }


}
