import React, { Fragment } from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';

export default function Searchable() {
  return (
    <Fragment>
      <SearchWords />
      <TopWords />
    </Fragment>
  );
}



