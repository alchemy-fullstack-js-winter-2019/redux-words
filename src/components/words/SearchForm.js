import React from 'react';
import PropTypes from 'prop-types';

function SearchTerm({ searchTerm, onChange }) {
  return (
    <input type="text" onChange={onChange} value={searchTerm} />
  );
}

SearchTerm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchTerm;
