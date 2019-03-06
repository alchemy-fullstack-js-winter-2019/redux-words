import React from 'react';
import PropTypes from 'prop-types';

function SearchTerm({ term, color, onChange }) {
  return (
    <>
      <input type="text" name="term" value={term} onChange={onChange} />
      <input type="color" name="color" value={color} onChange={onChange} />
    </>
  );
}

SearchTerm.propTypes = {
  term: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchTerm;
