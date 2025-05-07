import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; //
import { provideHttpClient } from '@angular/common/http';

// Import the necessary Angular Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'; // For form handling

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    MatDialogModule, // Add dialog module
    MatFormFieldModule, // Add form field module
    MatInputModule, // Add input module
    MatButtonModule, // Add button module
    ReactiveFormsModule, // Add reactive forms module
  ],
};
