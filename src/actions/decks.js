import * as API from '../utils/api';

import { 
  LOAD_DECKS,
  LOAD_DECK,
  DELETE_DECK
} from './actionTypes';

// LOAD_DECKS
export const loadDecks = decks => ({
  type: LOAD_DECKS,
  decks
});

// LOAD_DECK
export const loadDeck = deck => ({
  type: LOAD_DECK,
  deck
});

// Save new deck
export const saveDeck = deck => dispatch => {
  API.saveDeck(deck);
  dispatch( loadDeck(deck) );
};

// DELETE_DECK
export const deleteDeck = id => ({
  type: DELETE_DECK,
  id
});

// Remove deck action
export const removeDeck = id => dispatch => {
  API.removeDeck(id);
  dispatch( deleteDeck(id) );
};

// Fetch decks from API
export const fetchDecks = () => dispatch => (
  API.fetchDecks()
    .then( results => dispatch(loadDecks(JSON.parse(results))) )
);