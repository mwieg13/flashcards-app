import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Flashcard {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private apiUrl = 'http://localhost:3000'; // Adjust this to your actual backend URL

  private sampleFlashcards: Flashcard[] = [
    { question: 'What is the capital of France?', answer: 'Paris'},
    { question: 'What is the capital of the United Kingdom?', answer: 'London'},
    { question: 'What is the capital of Italy?', answer: 'Rome'}
  ];

  constructor(private http: HttpClient) {}

  getFlashcards(): Observable<Flashcard[]> {
    console.log("returning data for %d flashcards.", this.sampleFlashcards.length);

    return of(this.sampleFlashcards);

    // TODO - setup database connection
    return this.http.get<Flashcard[]>(`${this.apiUrl}/flashcards`);
  }

  // Optional: Add more methods for CRUD operations
  createFlashcard(flashcard: Flashcard): Observable<Flashcard> {
    return this.http.post<Flashcard>(`${this.apiUrl}/flashcards`, flashcard);
  }

  updateFlashcard(id: number, flashcard: Flashcard): Observable<Flashcard> {
    return this.http.put<Flashcard>(`${this.apiUrl}/flashcards/${id}`, flashcard);
  }

  deleteFlashcard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/flashcards/${id}`);
  }
}


