import React from 'react';
import PropTypes from 'prop-types';


export default function SearchForm({ term, onChange }) {
    return (
        <>
        <label>Search By Term
            <input type="text" value={term} onChange={onChange}/>
        </label>
        </>
    );
}

SearchForm.propTypes = {
    term: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
