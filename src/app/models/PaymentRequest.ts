import {PaymentCard} from './PaymentCard'
export class PaymentRequest {
    paymentId:string=''
    totalCost:number=0
    paymentStatus:string=''
    paymentCard:PaymentCard= new PaymentCard();
}