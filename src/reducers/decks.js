import * as API from '../utils/api';

import { 
  LOAD_DECKS,
  SAVE_DECK,
  REMOVE_DECK,
  CLEAR_DECKS
} from '../actions/actionTypes';

const decks = (state = {}, action) => {

  let decks = {};

  switch (action.type) {
    case LOAD_DECKS:
      return action.decks;
    
    case SAVE_DECK:
      decks = {
        ...state,
        [action.deck.title]: action.deck
      }
      API.saveDecks(decks);
      return decks;

    case REMOVE_DECK:
      decks = Object.keys(state)
        .filter( key => action.id !== key)
        .reduce( (deck, key) => {
          deck[key] = state[key];
          return deck;
        }, {});
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