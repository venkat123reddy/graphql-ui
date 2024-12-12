import { OrderServiceService } from './../order-service.service';
import { CurrentUser } from './../CurrentUser';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderView } from '../models/OrderViewData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {

  async cancelOrder(order:any) {

    let data:any =  await this.orderService.cancelOrder(order.orderId);
    console.log(order);
    console.log(data);
    this.getOrders();

  }
  async acceptOrder(order:any) {
    let data:any = await this.orderService.acceptOrder(order.orderId)
    console.log(data);
    this.getOrders();
  }
  public orderData:OrderView[]=[];
  public cusOrderData:OrderView[]=[];

  constructor(public currentUser:CurrentUser,
    private orderService:OrderServiceService
  ) {
        this.getOrders()
  }

  async getOrders() {
    
    if(this.currentUser.customerType=='vendor') {
      let data:any  = await this
      .orderService
      .getOrdersByCustomer(this.currentUser.userId)
      
      this.cusOrderData =data;

    } else {
      let data:any  = await this.orderService
    .getOrdersByUser(this.currentUser.userId);
    this.orderData = data;
    console.log(this.orderData);
    console.log("get===orders")

    }

  }
  
}
