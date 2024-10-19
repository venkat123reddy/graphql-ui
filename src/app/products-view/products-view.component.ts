import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule,MatInputModule],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent {

}
