import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProduct } from './create-products/AddProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  createProduct(product:AddProduct) {

    this.http.post<any>('http://localhost:8080/product/create',product)
    .subscribe(data=>{console.log(data)})
  }

  
}
