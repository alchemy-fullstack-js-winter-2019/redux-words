import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ term, onChange }) {
  return (
    <form>
      <label>Search Form</label>
      <input value={term} onChange={onChange} />
    </form>
  );
}

SearchForm.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;
