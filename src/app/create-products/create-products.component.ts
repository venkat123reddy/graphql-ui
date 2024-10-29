import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduct } from './AddProduct';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent {

  fruits :String [] = ["apple","bannana","orange"]
  vegratable:String [] = ["chilly","cabage"]
  product: AddProduct = new AddProduct(); 

  submit()
  {
    console.log(this.product.name);
  }

}
