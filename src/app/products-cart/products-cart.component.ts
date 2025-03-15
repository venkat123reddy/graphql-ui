import { ProductCarts } from './../ProductCarts';
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
  newaddress:string='no'
  address_boolean:boolean=false;
  address_input:string=''
  productBills:ProductBill[];
  paymentInitiation:boolean=false;
  delivery:boolean=false;
  paymentSucess:boolean=false;
  paymentBilling:boolean=true;
  TOTAL_BILL:number=0;
  delivery_input:string=''
  paymentCard:PaymentCard;
  constructor( public dialogRef: MatDialogRef<ProductsCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ProductBill[],
  private orderService:OrderServiceService,
  private productCart:ProductCarts,
  public currentUser:CurrentUser) {
     this.productBills = data; 
     let su = 0
     this.productBills
     .forEach(data=>{
      su+=data.productCost;
     })
     this.TOTAL_BILL = su;
     this.paymentCard = new PaymentCard();
     
    }

    deliveryoperation() {

      this.address_boolean = true
      this.delivery = false;
    
    }
    addressChange() {
      this.address_boolean = false;
      this.paymentInitiation = true;
    }

    addPayment() {
    
      this.delivery = true;
      this.paymentBilling = false;
    }
    
    async createOrder() {

      let order:Order = new Order();
      order.deliveryType = this.delivery_input;
      this.data.forEach(product=>{
        order.productIds.push(product.productId)
      }) 
      order.productbiils = this.data;
      let paymentRequest:PaymentRequest = new PaymentRequest();
      paymentRequest.paymentCard =  this.paymentCard;
      paymentRequest.totalCost = this.TOTAL_BILL;
      paymentRequest.paymentStatus = "SUCCESS"
      order.paymentRequest = paymentRequest;
      order.customerId = this.currentUser.userId;
      console.log(order)
      let data:any = await this.orderService.createOrder(order);
      this.paymentInitiation= false
      this.productCart.productBill = [];
      this.paymentSucess =true;

      
    }
}
