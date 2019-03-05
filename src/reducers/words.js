import dictionary from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM, UPDATE_COLOR } from '../actions/words';

const initialState = {
  dictionary: dictionary,
  color:  'rgb(255,0,0)',
  term: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { 
        ...state, 
        term: action.payload 
      };
    case UPDATE_COLOR:
      return { 
        ...state, 
        color: action.payload 
      };
    default: 
      return state;
  }
}

