import dictionary from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM, UPDATE_WORD_COLOR, UPDATE_BACKGROUND_COLOR } from '../actions/words/Words';

const initialState = {
  dictionary,
  searchTerm: '',
  wordColor: '#008000',
  backgroundColor: '#FFFF00'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    case UPDATE_WORD_COLOR:
      return {
        ...state,
        wordColor: action.payload
      };
    case UPDATE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload
      };
    default:
      return state;
  }
}
