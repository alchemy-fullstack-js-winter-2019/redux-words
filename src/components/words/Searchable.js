import React from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import PropTypes from 'prop-types';
import WordColor from '../../containers/words/WordColor';

function Searchable() {
  return (
   <>
    <SearchWords />
    <WordColor />
    <TopWords />
   </>
  );
}
Searchable.propTypes = {
  match: PropTypes.object.isRequired
};

export default Searchable;
