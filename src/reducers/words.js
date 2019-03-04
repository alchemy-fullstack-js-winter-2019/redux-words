import { CREATE_WORDS } from '../actions/words';
import dictionary from '../fixtures/words.json';

const initialState = {
  words: dictionary
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_WORDS:
    return {
      words: action.payload
    };
    default:
    return state;
  }
}