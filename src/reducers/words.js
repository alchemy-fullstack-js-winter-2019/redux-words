import dictionary from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/words';

const initialState = {
  dictionary,
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state, updateSearchTerm: action.payload };
    default:    
      return state;  
    }
  }
   
  