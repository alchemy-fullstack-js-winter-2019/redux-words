import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ searchTerm, color, onChange }) {
  return (
    <div>
      <label>Text:
        <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} />
      </label>
      <label>
        <span>Color:</span>
        <input type='color' name='color' value={color} onChange={onChange}></input>
      </label>
    </div>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
