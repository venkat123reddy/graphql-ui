import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefDataProduct } from './RefDataProduct';
import { AdminServiceService } from '../admin-service.service';
import { FormsModule } from '@angular/forms';
import { User } from './User';
import { OrderServiceService } from '../order-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css'
})
export class AdminPortalComponent {
  currentView:string=''
  refProduct:RefDataProduct= new RefDataProduct();
  viewProduct:RefDataProduct[]=[]
  usersList:User[]=[];

  constructor(private adminService:AdminServiceService,
    private orderService:OrderServiceService,
    private userService:UserServiceService
  ) {
    this.getProduct();
    this.getUsers();
  }

  async getOrders() {
    
  }
   
  async getUsers () {
    let data:any = await this.adminService.getUsers("a");
    this.usersList =data;
  }
  view(inp:any) {
    this.currentView = inp
    this.getProduct()
    this.getOrders()
  }

  async getProduct() {
    let data:any = await this.adminService.getPorductS("abc");
    this.viewProduct =data;
  }

  async block(user:any) {
    let data:any = await this.userService.block(user);
  }

  // deleteProduct(product:any) {
  //   this.viewProduct.
  // }
  async addProduct(products:any) {
    this.refProduct.type="product"
    let data:any  = await this.adminService.addPorduct(this.refProduct);
    this.refProduct = new RefDataProduct();

  }

}
