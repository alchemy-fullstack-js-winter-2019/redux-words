import React from 'react';
import PropTypes from 'prop-types';

function  Words({ words }) {
  console.log('words: ', words);
  const wordList = words.map((word, i) => 
    <li key={i}>{word}</li>);

    return (
      <ul> 
        {wordList}
      </ul>
    );
}

Words.propTypes = {
  words: PropTypes.array.isRequired
};

 export default Words;