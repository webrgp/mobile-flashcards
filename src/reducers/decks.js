import * as API from '../utils/api';

import { 
  LOAD_DECKS,
  ADD_DECK,
  REMOVE_DECK,
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

    case REMOVE_DECK:
      const remainingDecks = Object.keys(state)
        .filter( key => action.id !== key)
        .reduce( (deck, key) => {
          deck[key] = state[key];
          return deck;
        }, {});
      API.saveDecks(remainingDecks);
      return remainingDecks;


    case CLEAR_DECKS:
      API.saveDecks(action.decks);
      return action.decks;

    default:
      return state;
  }

}

export default decks;