import React from 'react';
import PropTypes from 'prop-types';

function WordsDisplay({ words }) {
  const listOfWords = words.map(word=> {
    return <li key={words}>{word}</li>;
  });
  
  return (
    <>
      <ul>
        {listOfWords}
      </ul>
    </>
  );
}

WordsDisplay.propTypes = {
  words: PropTypes.array,
};

export default WordsDisplay;