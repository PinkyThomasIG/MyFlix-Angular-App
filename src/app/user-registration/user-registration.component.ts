import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: '',
  };

  isSubmitting: boolean = false; // Flag to prevent multiple submissions
  errorMessage: string = ''; // To show error message on the UI

  constructor(private fetchApiData: FetchApiDataService) {}

  // Registration function
  registerUser(): void {
    if (
      this.userData.Username &&
      this.userData.Password &&
      this.userData.Email
    ) {
      this.isSubmitting = true; // Disable button during submission

      this.fetchApiData.userRegistration(this.userData).subscribe({
        next: (result) => {
          console.log(result);
          alert('User registered successfully!');
          this.resetForm(); // Reset form upon successful registration
        },
        error: (error) => {
          this.isSubmitting = false; // Enable button again after failure
          console.error(error);
          this.errorMessage =
            'Registration failed: ' + (error.error?.message || 'Unknown error');
        },
      });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }

  // Reset form fields
  resetForm(): void {
    this.userData = {
      Username: '',
      Password: '',
      Email: '',
      Birthday: '',
    };
    this.errorMessage = ''; // Clear any error message
  }
}
