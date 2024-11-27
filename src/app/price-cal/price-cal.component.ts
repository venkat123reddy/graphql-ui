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
@Component({
  selector: 'app-price-cal',
  standalone: true,
  imports: [HomePageComponent,FormsModule,CommonModule,MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './price-cal.component.html',
  styleUrl: './price-cal.component.css'
})
export class PriceCalComponent {

  quantity:number;
  cost:number;
  productName:string;
  constructor(
    public dialogRef: MatDialogRef<PriceCalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Product,
  private home:HomePageComponent ) {
      this.quantity = 0;
      this.cost =  data.cost.valueOf();
      this.productName = data.name.toString();
    }

    add() {
      let productBill:ProductBill = new ProductBill();
      productBill.productCost = (this.quantity*this.cost);
      productBill.productName = this.productName;
      productBill.productCount = this.quantity;
      this.home.addProduct(productBill);
      this.dialogRef.close({data:productBill})
    } 

}
