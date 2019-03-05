import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, onChange }) {
  return (
    <input onChange={onChange} type="text" name="searchTerm" value={searchTerm}></input>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
