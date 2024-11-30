import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // This makes the service available globally
  })
export class CurrentUser {
    userName:string=''
    customerType:string=''
    userId:string=''

    setDetails(customerType:any,userId:any) {
        this.customerType = customerType
        this.userId = userId
    }
}