import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

  createOrder(order:Order) {
    this.http.post<any>('http://localhost:8080/order/create',order).toPromise();
    
  }
}
