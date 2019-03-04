import React from 'react';
import PropTypes from 'prop-types';

//Words should display a list of words
const Words = ({ words }) => {
  const listOfWords = words.map(word => {
    return (
      <li key={word}>
        {word}
      </li>
    );
  });

  return (
    <ol>
      {listOfWords}
    </ol>
  );
};

Words.propTypes = {
  words: PropTypes.array.isRequired
};

export default Words;
