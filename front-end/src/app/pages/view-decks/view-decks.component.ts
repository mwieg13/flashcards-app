import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDeckDialogComponent } from '../../dialogs/edit-deck/edit-deck-dialog.component';
import { DeckModel, createDeckModel } from '../../models/deck.model'





@Component({
  selector: 'app-view-decks',
  templateUrl: './view-decks.component.html',
  styleUrls: ['./view-decks.component.css']
})
export class ViewDecksComponent {

  // TODO - eventually replace this static data with data from an API
  //  (at the time that I have API data, I'll probably be using createDeckModel() )
  decks: DeckModel[] = [
    { 
      name: 'Basics', 
      description: 'Basic flashcards covering fundamentals.',
      isEdited: false,
      cards: [ {sideOne: 'side one', sideTwo: 'side two'}, {sideOne: 'side one 2', sideTwo: 'side two 2'} ]
     },
    { 
      name: 'Algorithms', 
      description: 'Common interview algorithms and notes.',
      isEdited: false,
      cards: [ {sideOne: 'side one', sideTwo: 'side two'} ]
    },
    { 
      name: 'System Design', 
      description: 'High-level design patterns and case studies.' ,
      isEdited: false,
      cards: []
    }
  ];

  constructor(private dialog: MatDialog) {}

  createNewDeck() {
    let newDeck: DeckModel = createDeckModel({name: ''});

    const ref = this.dialog.open(EditDeckDialogComponent, {
      data: newDeck
    });

    ref.afterClosed().subscribe((result?: DeckModel) => {
      if (!result) return;

      if (result.isEdited) {
        this.decks.push(result);
      }
    });
  }

  openDeckModal(deck: DeckModel) {

    const ref = this.dialog.open(EditDeckDialogComponent, {
      data: deck
    });

    // kind of silly, but reset 'isEdited' for sake of maintaining state
    //  (this code changes substantially once I move to using an API)
    ref.afterClosed().subscribe((result?: DeckModel) => {
      if (!result) return;

      result.isEdited = false;
    });
   
  }
}
