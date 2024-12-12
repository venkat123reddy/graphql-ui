import { ProductServiceService } from './../product-service.service';
import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Product } from '../products-view/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  products:Product[] = []
  constructor(private currentUser:CurrentUser,
    private productService:ProductServiceService
  ) {
     this.getProducts();
  }
   async getProducts() {
     this.products = await this
     .productService.getProductsByUser(this.currentUser.userId);
     console.log(this.products)
     this.products.forEach(pro=>{
      pro.productEdit=false;
     })
  }

   async saveProduct(product:Product) {
     let data:any =  await this.productService.updateProducts(product)
    this.getProducts();
     console.log(product)
  }

  editProduct(product:Product) {
    product.productEdit = true;
  }

}
