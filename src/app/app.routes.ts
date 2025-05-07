import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  {
    path: 'register',
    component: UserRegistrationComponent,
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'movie-card',
    loadComponent: () =>
      import('./movie-card/movie-card.component').then(
        (m) => m.MovieCardComponent
      ),
  },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', component: NavbarComponent },
];
