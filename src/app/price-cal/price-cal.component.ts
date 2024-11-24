import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Product} from '../products-view/Product'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-price-cal',
  standalone: true,
  imports: [FormsModule,CommonModule,MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './price-cal.component.html',
  styleUrl: './price-cal.component.css'
})
export class PriceCalComponent {

  quantity:number;
  cost:number;
  constructor(
    public dialogRef: MatDialogRef<PriceCalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Product) {
      this.quantity = 0;
      this.cost =  data.cost.valueOf();
    }

    add() {
      this.dialogRef.close({data:""})
    } 

}
