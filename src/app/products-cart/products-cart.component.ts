import { Component, Inject } from '@angular/core';
import { ProductBill } from '../models/ProductBill';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Order } from '../models/Order';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-products-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-cart.component.html',
  styleUrl: './products-cart.component.css'
})
export class ProductsCartComponent {

  productBills:ProductBill[];
  paymentInitiation:boolean=false;
  constructor( public dialogRef: MatDialogRef<ProductsCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ProductBill[],
  private orderService:OrderServiceService) {
     this.productBills = data; 
    }

    addPayment() {
      this.paymentInitiation = true;
    }

    createOrder() {

      let order:Order = new Order();
      this.data.forEach(product=>{
        order.productIds.push(product.productName)
      }) 
       console.log("order-----")
       console.log(order);
      this.orderService.createOrder(order);

      // this.paymentInitiation= false
      
    }
}
