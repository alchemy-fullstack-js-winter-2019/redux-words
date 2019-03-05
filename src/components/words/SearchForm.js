import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ term, onChange }) {
  return (
    <>
    Search:
    <input type='text' name="searchTerm" value={term} onChange={onChange} />
    </>
  );
}

SearchForm.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
