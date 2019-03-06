const getSubWords = (arr, count) => arr.slice(0, count);

export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, count) => {
  return getSubWords(getWords(state), count);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getFirstWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getSubWords(getWords(state).filter(word => {
    return word.includes(searchTerm);
  }), count);
};
