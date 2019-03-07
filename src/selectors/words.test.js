import {
  getWords,
  getFirstWords,
  getSearchTerm,
  getTopWordsByTerm
} from './words';

describe('selectors', () => {
  let state = {
    words: {
      dictionary: ['word1', 'word2', 'word3', 'blah'],
      searchTerm: 'wo'
    }
  };

  it('gets words', () => {
    expect(getWords(state)).toEqual([
      'word1',
      'word2',
      'word3',
      'blah'
    ]);
  });

  it('gets first words', () => {
    expect(getFirstWords(state, 2)).toEqual([
      'word1',
      'word2',
    ]);
  });

  it('gets searchterm', () => {
    expect(getSearchTerm(state)).toEqual('wo');
  });

  it('gets top words by term', () => {
    expect(getTopWordsByTerm(state, 3)).toEqual([
      'word1',
      'word2',
      'word3'
    ]);
  });
});
