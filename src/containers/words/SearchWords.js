import { connect } from 'react-redux';
import { getSearchTerm, getWordColor } from '../../selectors/words';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm, updateWordColor } from '../../actions/words/Words';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import queryString from 'query-string';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchWords extends PureComponent {
  static propTypes = {
    searchTerm: PropTypes.string,
    wordColor: PropTypes.string,
    onChange: PropTypes.func
  };

  componentDidMount() {
    store.dispatch(updateSearchTerm(this.props.searchTerm));
  }

  render() {
    return (
      <SearchForm 
        searchTerm={this.props.searchTerm}
        wordColor={this.props.wordColor}
        onChange={this.props.onChange}
      />
    );
  }
}

const searchQuery = queryString.parse(location.search);
const term = searchQuery.searchTerm;

const mapStateToProps = state => ({
  searchTerm: term || getSearchTerm(state),
  wordColor: getWordColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      searchTerm: updateSearchTerm,
      wordColor: updateWordColor
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWords));
