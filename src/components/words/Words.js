import React from 'react';
import PropTypes from 'prop-types';

function Words({ words, wordColor, backgroundColor }) {
  const wordList = words.map((word, i)=> {
    return <li style={{ color: wordColor, backgroundColor }} key={i}>{word}</li>;
  });
  return (
    <ul>
      {wordList}
    </ul>
  );
}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  wordColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Words;
