import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import queryString from 'query-string';

const params = queryString.parse(location.search);
// eslint-disable-next-line
console.log(params.searchTerm); // this is the searchTerm in pathname

// eslint-disable-next-line
const Searchable = ({ location, match }) => {
  return (
    < >
      <SearchWords />
      <TopWords match={match}/>
    </>
  );
};

Searchable.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object
};

export default Searchable;
