import { HomePageComponent } from './../home-page/home-page.component';
import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Product} from '../products-view/Product'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductBill } from '../models/ProductBill';
import { ProductCarts } from '../ProductCarts';
@Component({
  selector: 'app-price-cal',
  standalone: true,
  imports: [FormsModule,CommonModule,MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './price-cal.component.html',
  styleUrl: './price-cal.component.css'
})
export class PriceCalComponent {

  quantity:number;
  cost:number;
  productName:string;
  productOwner:string=''
  constructor(
    public dialogRef: MatDialogRef<PriceCalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Product,
  private home:HomePageComponent,
 private prodcart:ProductCarts ) {
      this.quantity = 0;
      this.cost =  data.productCost.valueOf();
      this.productName = data.productName.toString();
      this.productOwner = data.userId;
    }

    add() {
      let productBill:ProductBill = new ProductBill();
      productBill.productCost = (this.quantity*this.cost);
      productBill.productName = this.productName;
      productBill.productCount = this.quantity;
      productBill.productOwner = this.productOwner;
      productBill.productId = this.data.productId;

      this.home.addProduct(productBill);
      this.prodcart.add(productBill);
      this.dialogRef.close({data:productBill})
    } 
    cancel() {
      this.dialogRef.close();
    }

}
