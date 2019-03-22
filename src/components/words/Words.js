import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordsList = words.map(word => {
    return <li key={word}>{word}</li>;
  });

  return (
    <ol>
      {wordsList}
    </ol>
  );
}

Words.propTypes = {
  words: PropTypes.array
};

export default Words;
