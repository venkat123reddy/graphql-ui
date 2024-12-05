import { Component, Inject } from '@angular/core';
import { ProductBill } from '../models/ProductBill';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Order } from '../models/Order';
import { OrderServiceService } from '../order-service.service';
import { PaymentCard } from '../models/PaymentCard';
import { FormsModule } from '@angular/forms';
import { PaymentRequest } from '../models/PaymentRequest';
import { CurrentUser } from '../CurrentUser';

@Component({
  selector: 'app-products-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products-cart.component.html',
  styleUrl: './products-cart.component.css'
})
export class ProductsCartComponent {

  productBills:ProductBill[];
  paymentInitiation:boolean=false;
  TOTAL_BILL:number=0;
  paymentCard:PaymentCard;
  constructor( public dialogRef: MatDialogRef<ProductsCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ProductBill[],
  private orderService:OrderServiceService,
  private currentUser:CurrentUser) {
     this.productBills = data; 
     let su = 0
     this.productBills
     .forEach(data=>{
      su+=data.productCost;
     })
     this.TOTAL_BILL = su;
     this.paymentCard = new PaymentCard();
     
    }

    addPayment() {
      this.paymentInitiation = true;
    }
    async createOrder() {

      let order:Order = new Order();
      this.data.forEach(product=>{
        order.productIds.push(product.productName)
      }) 
       console.log("order-----")
       console.log(order);
      let paymentRequest:PaymentRequest = new PaymentRequest();
      paymentRequest.paymentCard =  this.paymentCard;
      paymentRequest.totalCost = this.TOTAL_BILL;
      paymentRequest.paymentStatus = "SUCESS"
      order.paymentRequest = paymentRequest;
      order.customerId = this.currentUser.userId;
      console.log(order)
      await this.orderService.createOrder(order);
      this.paymentInitiation= false
      
    }
}
