export const getWords = state => {
    return state.words.dictionary;
};

export const getFirstWords = (state, n) => {
    return getWords(state).slice(0, n);
};
