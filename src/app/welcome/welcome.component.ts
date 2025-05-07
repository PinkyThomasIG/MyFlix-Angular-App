import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginDialogComponent } from '../user-login-dialog/user-login-dialog.component';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  constructor(public dialog: MatDialog) {}

  openLoginDialog(): void {
    this.dialog.open(UserLoginDialogComponent);
  }

  openRegistrationDialog(): void {
    this.dialog.open(UserRegistrationComponent);
  }
}
