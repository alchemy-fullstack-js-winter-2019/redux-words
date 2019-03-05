import React from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import PropTypes from 'prop-types';

function Searchable() {
  return (
   <>
    <SearchWords />
    <TopWords />
   </>
  );
}
Searchable.propTypes = {
  match: PropTypes.object.isRequired
};

export default Searchable;
