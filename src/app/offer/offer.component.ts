import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrentUser } from '../CurrentUser';
import { Product } from '../products-view/Product';
import { ProductServiceService } from '../product-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
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
  editProduct(product:Product) {
    product.productEdit = true;
    
  }

  async addOffer(product:Product) {
      product.productEdit = false;
      await this.productService
      .updateProducts(product)
  }


}
