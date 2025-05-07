import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.scss'],
})
export class MovieDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MovieDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog when the close button is clicked
  }
}
