export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});

export const UPDATE_WORD_COLOR = 'UPDATE_WORD_COLOR';
export const updateWordColor = wordColor => ({
  type: UPDATE_WORD_COLOR,
  payload: wordColor
});
