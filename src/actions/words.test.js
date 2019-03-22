import { updateSearchTerm } from './words';

describe('actions', () => {
  it('returns action to update searchterm', () => {
    expect(updateSearchTerm('ah')).toEqual({
      type: 'UPDATE_SEARCH_TERM',
      payload: 'ah'
    });
  });
});
