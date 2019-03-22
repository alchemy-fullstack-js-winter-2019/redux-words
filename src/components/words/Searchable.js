import React from 'react';
import PropTypes from 'prop-types';
import SearchTerm from '../../containers/words/SearchTerm';
import TopWords from '../../containers/words/TopWords';

function Searchable({ combine }) {
  return (
    <>
      <SearchTerm/>
      <TopWords combine={combine} />
    </>
  );
}

Searchable.propTypes = {
  combine: PropTypes.object.isRequired
};

export default Searchable;
