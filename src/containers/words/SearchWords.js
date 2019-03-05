import { connect } from 'react-redux';
import { getSearchTerm } from '../../selectors/words';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/words/Words';
import { withRouter } from 'react-router-dom';
import store from '../../store';

import queryString from 'query-string';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchWords extends PureComponent {
  static propTypes = {
    searchTerm: PropTypes.string,
    onChange: PropTypes.func
  };

  componentDidMount() {
    store.dispatch(updateSearchTerm(this.props.searchTerm));
  }

  render() {
    return (
      <SearchForm 
        searchTerm={this.props.searchTerm}
        onChange={this.props.onChange}
      />
    );
  }
}

SearchWords.propTypes = {
  location: PropTypes.object,
  searchTerm: PropTypes.string
};

const searchQuery = queryString.parse(location.search);
const term = searchQuery.searchTerm;

const mapStateToProps = state => ({
  searchTerm: term || getSearchTerm(state)
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
