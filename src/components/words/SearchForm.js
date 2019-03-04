import React from 'react';
import PropTypes from 'prop-types';

function SearchTerm({ term, onChange }) {
  return (
    <>
      <input type="text" name="term" value={term} onChange={onChange} />
    </>
  );
}

SearchTerm.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchTerm;
