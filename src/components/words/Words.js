import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordList = words.map(word => <li key={word}>{word}</li>);
 
  return (
    <ul>{wordList}</ul>
  );
}
Words.propTypes = {
  words:PropTypes.array.isRequired
};
export default Words;

