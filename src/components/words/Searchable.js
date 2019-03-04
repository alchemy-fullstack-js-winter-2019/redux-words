import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
/*
this combines the SearchWords and TopWords containers
Use this for the /words/:count route
*/
const Searchable = ({ match }) => {
  return (
    < >
      <SearchWords/>
      <TopWords match={match}/>
    </>
  );
};

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};

export default Searchable;
