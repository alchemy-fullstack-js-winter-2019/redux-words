import { connect } from 'react-redux';
import { getSearchTerm, getWordColor, getBackgroundColor } from '../../selectors/words';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm, updateWordColor, updateBackgroundColor } from '../../actions/words/Words';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchWords extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
    // wordColor: PropTypes.string,
    // backgroundColor: PropTypes.string,
    // onChange: PropTypes.func
  };

  componentDidMount() {
    const { term } = queryString.parse(this.props.location.search.slice(1));
    if(term) {
      this.props.updateSearchTerm(term);
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.searchTerm !== this.props.searchTerm) {
      const { pathname } = this.props.location;
      const search = queryString.stringify({ searchTerm: this.props.searchTerm });
      this.props.history.push(`${pathname}?${search}`);
    }
  }
  
  render() {
    return (
      <SearchForm {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state),
  wordColor: getWordColor(state),
  backgroundColor: getBackgroundColor(state)
});


const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      wordColor: updateWordColor,
      backgroundColor: updateBackgroundColor,
      searchTerm: updateSearchTerm
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  updateSearchTerm(searchTerm) {
    dispatch(updateSearchTerm(searchTerm));
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchWords));
