import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeckSummary } from '../../pages/view-decks/view-decks.component';



@Component({
  selector: 'edit-deck-dialog',
  templateUrl: './edit-deck-dialog.component.html',
  styleUrls: ['./edit-deck-dialog.component.css']
})
export class EditDeckDialogComponent {

  description: string;

  constructor(
    private dialogRef: MatDialogRef<EditDeckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeckSummary
  ) {
    this.description = data.description;
  }

  save() {
    // this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
