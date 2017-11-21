import * as API from '../utils/api';

import { 
  LOAD_DECKS,
  ADD_DECK,
  CLEAR_DECKS,
  REMOVE_DECK
} from './actionTypes';

// LOAD_DECKS
export const loadDecks = decks => ({
  type: LOAD_DECKS,
  decks
});

// ADD_DECK
export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

// REMOVE_DECK
export const removeDeck = id => ({
  type: REMOVE_DECK,
  id
});

// CLEAR_DECKS
export const clearDecks = () => ({
  type: CLEAR_DECKS,
  decks: {}
});


// Fetch decks from API
export const fetchDecks = () => dispatch => (
  API.fetchDecks()
    .then( decks => dispatch(loadDecks(JSON.parse(decks))) )
);