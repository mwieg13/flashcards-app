import { Component, OnInit } from '@angular/core';
import { FlashcardService, Flashcard } from './services/flashcard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  flashcards: Flashcard[];
  isFlipped = false;
  currentIndex = 0;
  isTransitioning = false;
  readonly FLIP_DURATION = 600; // Match CSS transition duration (in ms)
  isLoading = true;
  error: string | null = null;

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {

    this.flashcardService.getFlashcards().subscribe(data => {
      this.flashcards = data;
      this.isLoading = false;
    })
  }

  

  // flashcards: Flashcard[] = [
  //   { question: 'What is the capital of France?', answer: 'Paris'},
  //   { question: 'What is the capital of the United Kingdom?', answer: 'London'},
  //   { question: 'What is the capital of Italy?', answer: 'Rome'}
  // ];

  get currentCard(): Flashcard | undefined {
    return this.flashcards[this.currentIndex];
  }

  toggleFlip() {
    if (!this.isTransitioning && !this.isLoading) {
      this.isFlipped = !this.isFlipped;
    }
  }

  private navigateCard(getNextIndex: () => number) {
    if (this.isTransitioning) return; // Prevent rapid clicking
    this.isTransitioning = true;

    const nextIndex = getNextIndex();
    
    if (this.isFlipped) {
      // If card is flipped, flip back first
      this.isFlipped = false;
      setTimeout(() => {
        this.currentIndex = nextIndex;
        this.isTransitioning = false;
      }, this.FLIP_DURATION);
    } else {
      // If card is already facing front, just change the index
      this.currentIndex = nextIndex;
      this.isTransitioning = false;
    }
  }

  nextCard() {
    this.navigateCard(() => (this.currentIndex + 1) % this.flashcards.length);
  }

  prevCard() {
    this.navigateCard(() => (this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length);
  }
}
