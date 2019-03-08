import React from 'react';
import PropTypes from 'prop-types';

export default function Words({ words, term, onChange }) {
  const wordList = words.map((word) => {
    return <li key={word}>{word}</li>;
  });

  return (
    <>
    <input type='text' name='searchTerm' value={term} onChange={onChange} />
    <ul>{wordList}</ul>
    </>
  );

}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
