import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

   getOrdersByUser(userId:any) {
    return this.http.get('http://localhost:8080/order/get/'+userId)
    .toPromise()
     
  }

  getOrdersByCustomer(userId:any) {
    return this.http.get('http://localhost:8080/order/get/customer/'+userId)
    .toPromise()
     
  }
  acceptOrder(orderId:any) {
    return this.http.post('http://localhost:8080/order/accept/'+orderId,null).toPromise()
  }
  cancelOrder(orderId:any) {
    return this.http.post('http://localhost:8080/order/cancel/'+orderId,null).toPromise()
  }

  createOrder(order:Order) {
    this.http.post<any>('http://localhost:8080/order/create',order).toPromise();
    
  }
}
