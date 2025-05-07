import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailDialogComponent } from '../movie-detail-dialog/movie-detail-dialog.component'; // Import movie detail dialog
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { CommonModule } from '@angular/common';
import { GenreDetailDialogComponent } from '../genre-detail-dialog/genre-detail-dialog.component';
import { DirectorDetailDialogComponent } from '../director-detail-dialog/director-detail-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    GenreDetailDialogComponent,
    DirectorDetailDialogComponent,
  ],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public dialog: MatDialog,
    private fetchApiDataService: FetchApiDataService // Inject the FetchApiDataService
  ) {}

  ngOnInit(): void {
    this.fetchApiDataService.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data;
        console.log('Fetched movies:', data);
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
    });
  }

  openMovieDetailDialog(movie: any) {
    const dialogRef = this.dialog.open(MovieDetailDialogComponent, {
      data: movie,
      width: '600px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Movie detail dialog was closed');
    });
  }

  // View Genre method (API call to get genre data)
  viewGenre(movie: any) {
    this.dialog.open(GenreDetailDialogComponent, {
      data: {
        name: movie.genre.name || movie.genre,
        description: movie.genre.description || 'No description available',
      },
      width: '400px',
    });
  }
  viewDirector(movie: any) {
    const director = movie.director;
    this.dialog.open(DirectorDetailDialogComponent, {
      data: {
        name: director.name,
        bio: director.bio,
        birth: director.birth,
        death: director.death,
      },
      width: '400px',
    });
  }

  addToFavorite(movie: any) {
    this.fetchApiDataService.addFavoriteMovie(movie._id).subscribe({
      next: (response) => {
        alert(`${movie.title} has been added to favorites!`);
      },
      error: (error) => {
        console.error('Error adding to favorites:', error);
        alert('There was an error adding the movie to favorites.');
      },
    });
  }

  removeFromFavorite(movie: any) {
    this.fetchApiDataService.removeFavoriteMovie(movie._id).subscribe({
      next: (response) => {
        alert(`${movie.title} has been removed from favorites!`);
      },
      error: (error) => {
        console.error('Error removing from favorites:', error);
        alert('There was an error removing the movie from favorites.');
      },
    });
  }
}
