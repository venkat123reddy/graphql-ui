import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Product} from '../products-view/Product'
@Component({
  selector: 'app-price-cal',
  standalone: true,
  imports: [],
  templateUrl: './price-cal.component.html',
  styleUrl: './price-cal.component.css'
})
export class PriceCalComponent {
  constructor(
    public dialogRef: MatDialogRef<PriceCalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Product) {}

}
