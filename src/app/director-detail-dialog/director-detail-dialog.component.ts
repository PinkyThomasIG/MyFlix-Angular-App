import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-director-detail-dialog',
  standalone: true,
  templateUrl: './director-detail-dialog.component.html',
  styleUrls: ['./director-detail-dialog.component.scss'],
})
export class DirectorDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DirectorDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog when the close button is clicked
  }
}
