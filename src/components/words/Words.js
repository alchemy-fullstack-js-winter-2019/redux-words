import React from 'react';
import PropTypes from 'prop-types';

function  Words({ words }) {
  const wordList = words.map(word => 
    <li key={words}>{words}</li>);

    return (
      <ul> 
        {wordList}
      </ul>
    );
}



