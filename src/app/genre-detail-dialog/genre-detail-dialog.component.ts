import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre-detail-dialog',
  standalone: true,
  templateUrl: './genre-detail-dialog.component.html',
  styleUrls: ['./genre-detail-dialog.component.scss'],
})
export class GenreDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GenreDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog when the close button is clicked
  }
}
