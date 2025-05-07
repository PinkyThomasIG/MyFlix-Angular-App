import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service'; // service for handling API calls
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-dialog',
  standalone: true,
  templateUrl: './user-login-dialog.component.html',
  styleUrls: ['./user-login-dialog.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class UserLoginDialogComponent {
  loginForm: FormGroup;
  isSubmitting: boolean = false; // Flag to prevent multiple submissions
  errorMessage: string = ''; // To show error message on the UI

  constructor(
    private fb: FormBuilder,
    private apiService: FetchApiDataService, // Service for handling API calls
    public dialogRef: MatDialogRef<UserLoginDialogComponent>,
    private router: Router
  ) {
    // Initialize the form
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required]], // Username field
      Password: ['', [Validators.required]], // Password field
    });
  }

  // Submit function
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isSubmitting = true; // Disable button during submission
      const loginData = this.loginForm.value;

      this.apiService.userLogin(loginData).subscribe({
        next: (response: any) => {
          console.log(response); // Ensure this returns 'token' and 'user'
          alert('Login successful!');
          localStorage.setItem('token', response.token); // Store token in localStorage
          localStorage.setItem('currentUser', response.user.username); // Optionally store username

          this.dialogRef.close(); // Close the dialog upon success
          this.loginForm.reset(); // Optionally reset form upon success

          this.router.navigate(['/movie-card']);
        },
        error: (error) => {
          this.isSubmitting = false; // Enable button again after failure
          console.error(error); // Log error
          this.errorMessage =
            'Login failed: ' + (error.error?.message || 'Unknown error');
        },
      });
    } else {
      this.errorMessage = 'Please fill in both username and password.';
    }
  }

  // Close dialog function
  onClose(): void {
    this.dialogRef.close();
  }
}
