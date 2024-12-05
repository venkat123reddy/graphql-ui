import { PaymentRequest } from './PaymentRequest';
export class Order {
    productIds:String[]=[]
    customerId:string=''
    deliveryType:string=''
    orderId:string=''
    paymentRequest:PaymentRequest= new PaymentRequest();
}