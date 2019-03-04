export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, count) => {
  return getWords(state).slice(0, count);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};

function selectorPerformance(fn) {
  const start = performance.now();
  const results = fn();
  console.log('PERFORMANCE', performance.now() - start);
  return results;
}

function badSelector(words, searchTerm) {
  const filtered = [];
  for(let j = 0; j < words.length; j++) {
    if(!filtered.some(w => w === words[j]) && words[j].includes(searchTerm)) {
      filtered.push(words[j]);
    }
  }
  return filtered;
}
