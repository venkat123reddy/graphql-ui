import { PriceCalComponent } from './../price-cal/price-cal.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Product } from './Product';
import { CommonModule } from '@angular/common';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule,MatInputModule,MatDialogModule],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsViewComponent {
  products:Product[] = [{"id":"123","name":"potato","cost":5},
    {"id":"123","name":"tamoto","cost":5},
    {"id":"123","name":"egg","cost":2},
    {"id":"123","name":"bringal","cost":1},
    {"id":"123","name":"carrot","cost":2},
    {"id":"123","name":"beans","cost":3},
    {"id":"123","name":"beans","cost":3}
  ]
  constructor(private dialog :MatDialog){

  }
 

  addProduct(product:Product) {
     this.dialog.open(PriceCalComponent,{data:product})
  }

}
