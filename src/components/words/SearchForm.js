import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, handleChange }) => {
  return (
    < >
      <input name="searchTerm" value={searchTerm} onChange={handleChange}/>
    </>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
