import { Injectable } from "@angular/core";
import { ProductBill } from "./models/ProductBill";

@Injectable({
    providedIn: 'root' // This makes the service available globally
  })
export class ProductCarts {

    productBill:ProductBill[]=[];

    add(product:ProductBill) {
        this.productBill.push(product)
    }

}