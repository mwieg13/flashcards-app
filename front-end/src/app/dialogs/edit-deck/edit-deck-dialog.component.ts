import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeckModel } from '../../models/deck.model';


@Component({
  selector: 'edit-deck-dialog',
  templateUrl: './edit-deck-dialog.component.html',
  styleUrls: ['./edit-deck-dialog.component.css']
})
export class EditDeckDialogComponent {

  title: string;
  name: string;
  description: string;

  constructor(
    private dialogRef: MatDialogRef<EditDeckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeckModel
  ) {
    // determine if this a new deck by checking if the Deck already has a name
    this.title = data.name.length == 0 ? "New Deck" : "Edit Deck";

    this.name = data.name;
    this.description = data.description;
    this.data = data;
  }

  save() {
    // TODO - replace two-way data binding with call to backend API
    this.data.name = this.name;
    this.data.description = this.description;
    this.data.isEdited = true;

    this.dialogRef.close(this.data);
  }

  close() {
    this.dialogRef.close();
  }
}
