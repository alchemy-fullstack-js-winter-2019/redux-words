import reducer from './words';

describe('reducers', () => {
  it('updates searchterm', () => {
    const state = {
      dictionary: 'word',
      searchTerm: 'wo'
    };

    const action = {
      type: 'UPDATE_SEARCH_TERM',
      payload: 'rd'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      searchTerm: 'rd'
    });
  });
});
