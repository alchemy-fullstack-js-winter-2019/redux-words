import React, { Fragment } from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import PropTypes from 'prop-types';

export default function Searchable({ match }) {
  return (
    <Fragment>
      <SearchWords/>
      <TopWords match={match} />
    </Fragment>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};
