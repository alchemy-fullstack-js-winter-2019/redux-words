import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
    const wordsList = words.map(word => {
        return <li key={word}>{word}</li>
    })
    return (
        <ul>{wordsList}</ul>
    )
}

Words.propTypes = {
    words: PropTypes.array.isRequired
};

export default Words;
