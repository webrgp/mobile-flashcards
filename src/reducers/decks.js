import { 
  LOAD_DECKS,
  LOAD_DECK,
  DELETE_DECK
} from '../actions/actionTypes';

const decks = (state = {}, action) => {

  let decks = {};

  switch (action.type) {
    case LOAD_DECKS:
      return action.decks;
    
    case LOAD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck
      };

    case DELETE_DECK:
      decks = {
        ...state,
        [action.id]: null
      }

      delete decks[action.id];
      return decks;

    default:
      return state;
  }

}

export default decks;