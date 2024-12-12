import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';
import { OfferComponent } from './offer/offer.component';

export const routes: Routes = [
    {path:'homepage',component:HomePageComponent},
    {path:'user-profile',component:UserProfileComponent},
    {path:'products-view',component:ProductsViewComponent},
    {path:'view-orders',component:ViewOrdersComponent},
    {path:'create-product',component:CreateProductsComponent},
    {path:'view-product',component:ViewProductsComponent},
    {path:'update-products',component:UpdateProductsComponent},
    {path:'admin',component:AdminPortalComponent},
    {path:'offer',component:OfferComponent}
];
