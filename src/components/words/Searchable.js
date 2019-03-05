import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';

const Searchable = ({ match }) => {
  return (
    < >
      <SearchWords />
      <TopWords match={match}/>
    </>
  );
};

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};

export default Searchable;
