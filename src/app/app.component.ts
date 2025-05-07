import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginDialogComponent } from './user-login-dialog/user-login-dialog.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, NavbarComponent, MatToolbarModule],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  // Open registration dialog
  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(UserRegistrationComponent);
  }

  // Open login dialog
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(UserLoginDialogComponent);
  }

  // Open profile dialog
  openProfileDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '400px', // Adjust the size if needed
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Profile dialog was closed');
      // Handle any result here if necessary
    });
  }
}
