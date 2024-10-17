import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule,MatDialogModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private dialog :MatDialog){

  }

  userprofile() {
    this.dialog.open(UserProfileComponent)
  }


}
