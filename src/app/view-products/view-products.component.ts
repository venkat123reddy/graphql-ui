import { ProductServiceService } from './../product-service.service';
import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Product } from '../products-view/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule],
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
  }

}
