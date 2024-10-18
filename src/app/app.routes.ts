import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'user-profile',component:UserProfileComponent},
    {path:'products-view',component:ProductsViewComponent},
    {path:'view-orders',component:ViewOrdersComponent}
];
