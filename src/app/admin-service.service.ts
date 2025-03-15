import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) {

   }
   getUsers(product:any) {
    return this.http.get("http://localhost:8080/admin/users").toPromise();
   }

   addPorduct(product:any) {
    return this.http.post("http://localhost:8080/admin/add",product).toPromise();
   }
   

   getPorduct(product:any) {
    return this.http.get("http://localhost:8080/admin/get").toPromise();
   }

   getPorductS(product:any) {
    return this.http.get("http://localhost:8080/admin/gets").toPromise();
   }
}
