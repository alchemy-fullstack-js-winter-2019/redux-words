import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ term, color, onChange }) {
  return (
    <div>
      <label>Text:
        <input type="text" name="term" value={term} onChange={onChange} />
      </label>
      <label>
        <span>Color:</span>
        <input type='color' name='color' value={color} onChange={onChange}></input>
      </label>
    </div>
  );
}

SearchForm.propTypes = {
  term: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
