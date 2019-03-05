
export function selectorPerformance(fn) {
    const start = performance.now();
    const results = fn();
    console.log('PERFORMANCE', performance.now() - start);
    return results;
}
  
export function badSelector(words, searchTerm) {
    const filtered = [];
    for(let j = 0; j < words.length; j++) {
        if(!filtered.some(w => w === words[j]) && words[j].includes(searchTerm)) {
            filtered.push(words[j]);
        }
    }
    return filtered;
}


export const getWords = state => {
    return state.words.dictionary;
};

export const getFirstWords = (state, n) => {
    return getWords(state).slice(0, n);
};

export const getSearchTerm = state => {
    return state.words.searchTerm;
};
export const getSearchWords = (state, n) => {
    const term = getSearchTerm(state);
    return getWords(state).filter(word => {
        return word.includes(term);
    }).slice(0, n);
};

