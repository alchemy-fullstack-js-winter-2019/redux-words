import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getSearchTerm } from '../../selectors/words';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/words/Words';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

//:count?searchTerm=hi
class SearchWords extends PureComponent {

  componentDidMount() {
    const searchQuery = queryString.parse(this.props.location.search);
    const term = searchQuery.searchTerm;
  }

  render() {
    return (
      <SearchForm />
    );
  }
}

SearchWords.propTypes = {
  location: PropTypes.object
};

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
)(SearchWords));
