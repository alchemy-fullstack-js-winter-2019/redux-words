import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ searchTerm, onChange }) {
  return (
    <div>
      <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} />
    </div>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
