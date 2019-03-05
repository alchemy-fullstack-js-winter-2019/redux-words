import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, wordColor, backgroundColor, onChange }) {
  console.log('searchTerm', searchTerm);
  return (
    <>
    <input onChange={onChange} type="text" name="searchTerm" value={searchTerm}></input>
    <input onChange={onChange} type="color" name="wordColor" value={wordColor}></input>
    <input onChange={onChange} type="color" name="backgroundColor" value={backgroundColor}></input>
    </>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  wordColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
