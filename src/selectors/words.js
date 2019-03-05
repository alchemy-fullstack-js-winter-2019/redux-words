export const getWordColor = state => state.words.wordColor;

export const getWords = state => state.words.dictionary;

export const getTopWords = (state, count) => {
  return getWords(state).slice(0, count);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getSubWords = (arr, count) => arr.slice(0, count);

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getSubWords(getWords(state).filter(word => {
    return word.includes(searchTerm);
  }), count);
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

