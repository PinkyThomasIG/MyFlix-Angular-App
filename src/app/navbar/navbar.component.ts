import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    ProfileDialogComponent,
  ],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private fetchApiDataService: FetchApiDataService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  goToMovies() {
    this.router.navigate(['/movies']); // Navigate to movies page
  }

  goToProfile() {
    const user = localStorage.getItem('user'); // Retrieve user info from localStorage
    const token = localStorage.getItem('token'); // Retrieve token

    if (user && token) {
      this.fetchApiDataService.getUser().subscribe((userData) => {
        const dialogRef = this.dialog.open(ProfileDialogComponent, {
          width: '400px',
          data: {
            username: userData.username,
            email: userData.email,
            birthday: userData.birthday,
            password: '', // Allow user to update password if needed
          },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            // Update localStorage with the new data
            localStorage.setItem('user', result.username);
            console.log('Profile updated:', result);
          }
        });
      });
    }
  }

  logout() {
    this.fetchApiDataService.logout(); // Log the user out

    // Show the snackbar message for 3 seconds
    this.snackBar.open('You have been logged out', 'Close', {
      duration: 3000, // Show message for 3 seconds
    });

    // Navigate to the login page after 3 seconds
    setTimeout(() => {
      this.router.navigateByUrl('/welcome'); // Navigate explicitly to the login page
    }, 3000); // 3000ms delay
  }

  openProfileDialog() {
    this.dialog.open(ProfileDialogComponent, {
      width: '400px',
    });
  }
}
