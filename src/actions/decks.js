import * as API from '../utils/api';

import { 
  LOAD_DECKS
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