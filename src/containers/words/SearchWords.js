import { connect } from 'react-redux';
import { getSearchTerm } from '../../selectors/words';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/words/Words';
import { withRouter } from 'react-router-dom';

// The following was an attempt to do the bonus work and bring in the location.search query!
// I noted it out because it was causing errors since it's unfinished
// :count?searchTerm=hi

// import queryString from 'query-string';
// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// class SearchWords extends PureComponent {

//   componentDidMount() {
//     const searchQuery = queryString.parse(this.props.location.search);
//     const term = searchQuery.searchTerm;
//   }

//   render() {
//     return (
//       <SearchForm />
//     );
//   }
// }

// SearchWords.propTypes = {
//   location: PropTypes.object
// };

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm));
