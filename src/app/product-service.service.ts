import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProduct } from './create-products/AddProduct';
import { Product } from './products-view/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[]=[];
  constructor(private http:HttpClient) { }

  createProduct(product:AddProduct) {

    this.http.post<any>('http://localhost:8080/product/create',product)
    .subscribe(data=>{console.log(data)})
  }

  updateProduct(product:AddProduct) {
    return this.http.put("http://localhost:8080/product/update",product).toPromise();
  }

  updateProducts(product:Product) {
    return this.http.put("http://localhost:8080/product/update",product).toPromise();
  }

  getProducts() {
     return this.http.get<any>('http://localhost:8080/product/get')
     .toPromise();
  }

  getProductsByUser(user:any) {
    return this.http.get<any>('http://localhost:8080/product/get/'+user)
     .toPromise();
  }

  
}
