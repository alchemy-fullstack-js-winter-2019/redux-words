import { UPDATE_WORDS } from '../actions/words';
import dictionary from '../fixtures/words.json';

const initialState = {
  dictionary,
  searchTerm: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_WORDS:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}




