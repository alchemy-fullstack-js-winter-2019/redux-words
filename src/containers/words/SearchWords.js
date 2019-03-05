import { connect } from 'react-redux';
import { getSearchTerm, getWordColor, getBackgroundColor } from '../../selectors/words';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm, updateWordColor, updateBackgroundColor } from '../../actions/words/Words';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import queryString from 'query-string';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchWords extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    searchTerm: PropTypes.string,
    wordColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    onChange: PropTypes.func
  };

  componentDidMount() {
    
    store.dispatch(updateSearchTerm(this.props.searchTerm));
    store.dispatch(updateWordColor(this.props.wordColor));
    store.dispatch(updateBackgroundColor(this.props.backgroundColor));
  }

  render() {
    return (
      <SearchForm {...this.props}/>
    );
  }
}

const searchQuery = queryString.parse(location.search);
const term = searchQuery.searchTerm;

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state) || term,
  wordColor: getWordColor(state),
  backgroundColor: getBackgroundColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      searchTerm: updateSearchTerm,
      wordColor: updateWordColor,
      backgroundColor: updateBackgroundColor
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWords));
