import dictionary from '../fixtures/words';

// it should load all words from src/fixtures/words.json into its state under a property called dictionary
const initalState = {
  dictionary
};

export default function reducer(state = initalState, { type, payload }) {
  // switch(type) {
  //   case 'LOAD_WORDS':
  //     return payload;
  //   default:
  //     return state;
  // }
  return state;
}
