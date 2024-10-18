import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { RouterLink,RouterOutlet } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ MatBadgeModule,RouterOutlet,RouterLink,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule,MatDialogModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isSideNav:boolean;
  constructor(private dialog :MatDialog){
this.isSideNav = false;
  }

  sideNave(){
    this.isSideNav = ! this.isSideNav;
  }

  userprofile() {
    this.dialog.open(UserProfileComponent)
  }


}
