import * as API from '../utils/api';

import { 
  LOAD_DECKS,
  LOAD_NEW_DECK
} from './actionTypes'

// LOAD_DECKS
export const loadDecks = decks => ({
  type: LOAD_DECKS,
  decks
});

// Fetch decks from API
export const fetchDecks = () => dispatch => (
  API.fetchDecks()
    .then( decks => dispatch(loadDecks(decks)) )
);

// LOAD_NEW_DECK
export const loadNewDeck = deck => ({
  type: LOAD_NEW_DECK,
  deck
});

export const createDeck = deck  => dispatch => (
  API.createDeck( deck )
    .then(deck => dispatch(loadNewDeck(deck)))
);