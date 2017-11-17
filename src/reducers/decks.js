import { 
  LOAD_DECKS
} from '../actions/actionTypes';

const decks = (state = {}, action) => {

  const { decks } = action;

  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        decks
      };
  
    default:
      return state;
  }

}

export default decks;