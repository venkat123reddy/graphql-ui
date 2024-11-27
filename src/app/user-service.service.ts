import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  uservalidations:boolean=false;
  constructor(private http:HttpClient) { }


  createProduct() {
    
  }

  getHttp() {
    console.log('venkata')
   let data = this.http.get<Response>('http://localhost:8080/profile/test')
   .subscribe(data=> console.log(data))
  }

  createuser(user:any) {
    console.log('data');
    let response = this.
    http.post<any>('http://localhost:8080/profile/create',user)
    .subscribe(data=>{console.log(data)})

  }
  uservalidation(user:any):boolean {
    this.http.post<any>('http://localhost:8080/profile/validate',user)
    .subscribe((data: any)=>{
      console.log(data);
      console.log(data.validation)
      this.uservalidations = data.validation;
      
    })
    return this.uservalidations;

  }


}
