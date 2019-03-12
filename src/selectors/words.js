export const getWords = state => state.words.dictionary;
export const getFirstWords = (state, count) => {
  return getWords(state).slice(0, count);
};

export const getTopWordsByTerm = state => {
  return state.words.searchTerm;
};

export const getFirstWordsByTerm = (state, count) => {
  const searchTerm = getTopWordsByTerm(state);
  return getWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};
