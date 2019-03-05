import React from 'react';
import PropTypes from 'prop-types';

function Words({ words, color }) {
  const wordsList = words.map(word => {
    return (
      <li key={word}>{word}</li>
    );
  });
  return (
    <ul style={{ color: color }}>
      {wordsList}
    </ul>
  );
}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired
};

export default Words;
