import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importing MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule], // Importing necessary modules for the form
})
export class UserProfileComponent {
  username: string = '';
  email: string = '';

  constructor() {}

  onSubmit(): void {
    if (this.username && this.email) {
      // Handle saving the profile (e.g., make an API call)
      console.log('Username:', this.username);
      console.log('Email:', this.email);
    } else {
      console.error('Please fill out both fields.');
    }
  }
}
