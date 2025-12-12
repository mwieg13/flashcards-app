import { Flashcard } from './flashcard.model'


export interface DeckModel {
  name: string;
  description: string;
  isEdited: boolean;
  cards: Flashcard[]
}

const DEFAULT_DECK_SUMMARY: DeckModel = {
  name: '',
  description: '',
  isEdited: false,
  cards: []
};

export function createDeckModel(
  overrides: Partial<DeckModel> = {}
): DeckModel {
  return {
    ...DEFAULT_DECK_SUMMARY,
    ...overrides
  };
}