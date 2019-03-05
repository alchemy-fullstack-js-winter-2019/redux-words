import React from 'react';
import PropTypes from 'prop-types';

export default function SearchTerm({ term, onChange }) {
  <input type='text' name='searchTerm' value={term} onChang={onChange} />;
}

SearchTerm.PropTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

