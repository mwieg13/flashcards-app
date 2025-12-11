import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDeckDialogComponent } from '../../dialogs/edit-deck/edit-deck-dialog.component';

export interface FlashcardSummary {
  sideOne: string,
  sideTwo: string
}

export interface DeckSummary {
  name: string;
  description: string;
  cards: FlashcardSummary[]
}

@Component({
  selector: 'app-view-decks',
  templateUrl: './view-decks.component.html',
  styleUrls: ['./view-decks.component.css']
})
export class ViewDecksComponent {

  // Example collection of objects; replace or populate from a service as needed
  decks: DeckSummary[] = [
    { 
      name: 'Basics', 
      description: 'Basic flashcards covering fundamentals.',
      cards: [ {sideOne: 'side one', sideTwo: 'side two'}, {sideOne: 'side one 2', sideTwo: 'side two 2'} ]
     },
    { 
      name: 'Algorithms', 
      description: 'Common interview algorithms and notes.',
      cards: [ {sideOne: 'side one', sideTwo: 'side two'} ]
    },
    { 
      name: 'System Design', 
      description: 'High-level design patterns and case studies.' ,
      cards: []
    }
  ];

  constructor(private dialog: MatDialog) {}

  openDeckModal(deck: DeckSummary) {

    this.dialog.open(EditDeckDialogComponent, {
      data: deck
    });
  }
}
