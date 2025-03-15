import { Product } from './../products-view/Product';
import { CurrentUser } from './../CurrentUser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct } from './AddProduct';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent {

  fruits :String [] = []
  vegratable:String [] = ["chilly","cabage",]
  product: AddProduct = new AddProduct(); 
  status:boolean=true;

  constructor(private productService:ProductServiceService,
              private CurrentUser:CurrentUser,
              private admin:AdminServiceService 
  ) {

    this.getProdRefData();
  }


  async getProdRefData() {
     let data:any =  await this.admin.getPorduct("a");
     this.fruits = data;
  }
  add() {
    this.status = true;
  }

  submit()
  {
    console.log(this.product);
    this.product.userId = this.CurrentUser.userId;
    this.productService.createProduct(this.product);
    this.product = new AddProduct();
    this.status = false;
  }

}
