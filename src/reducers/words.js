import { UPDATE_SEARCH_TERM } from '../actions/words';
import dictionary from '../fixtures/words';

// it should load all words from src/fixtures/words.json into its state under a property called dictionary
const initalState = {
  dictionary,
  searchTerm: ''
};

export default function reducer(state = initalState, { type, payload }) {
  switch(type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload
      };
    default:
      return state;
  }
}
