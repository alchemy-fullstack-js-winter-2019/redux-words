import React from 'react';
import SearchWords from '../../containers/SearchWords';
import TopWords from '../../containers/TopWords';
import PropTypes from 'prop-types'

function Searchable({ match  }) {
    return (
        <>
            <SearchWords />
            <TopWords match={match}/>
        </>
    );
}
Searchable.propTypes = {
    match: PropTypes.object.isRequired
}

export default Searchable;
