import dictionary from '../fixtures/words';
import { UPDATE_SEARCH_TERM } from '../actions/words';



const initialState = {
  dictionary,
  searchTerm: ''
};

// export default function reducer(state = initialState) {
//   return state;
// }
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;

  }
}
