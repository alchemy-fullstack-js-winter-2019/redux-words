import React from 'react';
import PropTypes from 'prop-types';

export function Words({ words }) {
    const list = words.map(ele => {
        return <li key={ele}> {ele}</li>;
    });

    return (
        <>
            <h3>Hello form the words list component</h3>
        <ul>
            {list}
        </ul>
        </>
    );
}

Words.propTypes = {
    words: PropTypes.array.isRequired
};
