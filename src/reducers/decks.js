import * as API from '../utils/api';

import { 
  LOAD_DECKS,
  ADD_DECK,
  CLEAR_DECKS
} from '../actions/actionTypes';

const decks = (state = {}, action) => {

  switch (action.type) {
    case LOAD_DECKS:
      return action.decks;
    
    case ADD_DECK:
      const decks = {
        ...state,
        [action.deck.title]: action.deck
      }
      API.saveDecks(decks);
      return decks;

    case CLEAR_DECKS:
      API.saveDecks(action.decks);
      return action.decks;

    default:
      return state;
  }

}

export default decks;