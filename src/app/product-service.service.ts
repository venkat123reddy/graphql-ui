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

  getProducts() {
    this.http.get<any>('http://localhost:8080/product/get')
    .subscribe(data=>{
      this.products=data;
    })

    return this.products;

  }

  
}
