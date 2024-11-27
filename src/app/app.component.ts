import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CreateProductsComponent } from "./create-products/create-products.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterComponent, RouterOutlet, HomePageComponent, RouterModule, LoginComponent, RegisterComponent, CreateProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'farm-fresh';
}
