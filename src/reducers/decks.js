import { 
  LOAD_DECKS,
  LOAD_NEW_DECK
} from '../actions/actionTypes';

const decks = (state = {}, action) => {

  const { decks, deck } = action;

  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        decks
      };
    case LOAD_NEW_DECK:
      return {
        ...state,
        decks: state.decks.concat(deck)
      };
    default:
      return state;
  }

}

export default decks;