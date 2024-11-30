import { ProductBill } from './../models/ProductBill';
import { ProductsCartComponent } from './../products-cart/products-cart.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Component, Injectable } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { RouterLink,RouterOutlet } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { Console } from 'console';
import { ProductCarts } from '../ProductCarts';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CommonModule,MatBadgeModule,RouterOutlet,RouterLink,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule,MatDialogModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
@Injectable({
  providedIn: 'root' // This makes the service available globally
})
export class HomePageComponent {
  isSideNav:boolean;
  isLogged:boolean;
  userid:string;
  userLogger:boolean=false;
  isregis :boolean=false;
  cartList:ProductBill[] = [];
  customerType:string=''
  constructor(private dialog :MatDialog,
    public prodcart:ProductCarts
  ){
this.isSideNav = false;
this.isLogged = false;
this.userid = '';
  }

  cartCheck() {
    this.dialog.open(ProductsCartComponent,{data:this.prodcart.productBill});
  }

  sideNave(){
    this.isSideNav = ! this.isSideNav;
  }

  userprofile() {
    this.dialog.open(UserProfileComponent)
  }
  login() {
    this.addProduct(new ProductBill())
    this.dialog.open(LoginComponent)
    .afterClosed()
    .subscribe(res=>{
      console.log("--info--")
      this.isLogged = true;
      this.userid = res.data.userName;
      this.customerType= res.data.customerType;
      console.log(res.data);
      console.log(this.userid);
    })
  }
  register() {
    this.dialog.open(RegisterComponent)
    .afterClosed()
    .subscribe( res=> {
      this.isregis= true;
    }
    )
  }

  addProduct(productBill:ProductBill) {
    this.cartList.push(productBill);
    console.log(this.cartList.length)
  }



}
