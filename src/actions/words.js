export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export const updateSearchTerm = (term) => {
    return {
        type: UPDATE_SEARCH_TERM,
        payload: term
    };
};
