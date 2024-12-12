import { PaymentRequest } from './PaymentRequest';
import { ProductBill } from './ProductBill';
export class Order {
    productIds:String[]=[]
    customerId:string=''
    deliveryType:string=''
    orderId:string=''
    paymentRequest:PaymentRequest= new PaymentRequest();
    productbiils:ProductBill[]=[]
}