import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'user-profile',component:UserProfileComponent}
];
