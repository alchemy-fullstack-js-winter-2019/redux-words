import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" name="searchTerm" value={searchTerm} onChange={handleChange}/>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
