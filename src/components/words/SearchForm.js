import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ term, onChange }) {
  return (
    <input value={term} onChange={onChange} name="searchTerm"/>
  );
}

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired
};

export default SearchForm;
