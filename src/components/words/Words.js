import React from 'react';
import PropTypes from 'prop-types';

export default function Words({ words, color }) {
  const listOfWords = words.map(word => {
    return <li key={word} style={{ color: color }}>{word}</li>;
  });

  return (
    <ul>{listOfWords}</ul>
  );
}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired
};
