import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'querystring';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm, getColor } from '../../selectors/words';
import { updateSearchTerm, updateColor } from '../../actions/words';

class SearchWords extends PureComponent {
  static propTypes = {
    term: PropTypes.string,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { term } = qs.parse(this.props.location.search.slice(1));
    updateSearchTerm(term);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.term !== this.props.term) {
      const { pathname } = this.props.location;
      const search = qs.stringify({ term: this.props.term });
      this.props.history.push(`${pathname}?${search}`);
    }
  }

  render() {
    return <SearchForm {...this.props} />;
  }
}

const mapStateToProps = state => ({
  term: getSearchTerm(state),
  color: getColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      color: updateColor,
      term: updateSearchTerm
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchWords));
