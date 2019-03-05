// function selectorPerformance(fn) {
//   const start = performance.now();
//   const results = fn();
//   console.log('PERFORMANCE', performance.now() - start);
//   return results;
// }

// function badSelector(words, searchTerm) {
//   const filtered = [];
//   for(let j = 0; j < words.length; j++) {
//     if(!filtered.some(w => w === words[j]) && words[j].includes(searchTerm)) {
//       filtered.push(words[j]);
//     }
//   }
//   return filtered;
// }

export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, numWords) => {
  return getWords(state).slice(0, numWords);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getTopWordsByTerm = (state, numWords) => {
  return getWords(state)
    .filter(word => word.includes(getSearchTerm(state)))
    .slice(0, numWords);
};
