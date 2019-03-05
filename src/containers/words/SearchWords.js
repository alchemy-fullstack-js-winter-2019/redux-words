import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'querystring';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm, updateColor } from '../../actions/words';
import { getSearchTerm, getColor } from '../../selectors/words';
import PropTypes from 'prop-types';

class SearchWords extends PureComponent {
  static propTypes = {
    term: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    updateSearchTerm: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { term } = qs.parse(this.props.location.search.slice(1));
    this.props.updateSearchTerm(term);
    // store.dispatch(updateColor(this.props.color));
  }

  componentDidUpdate(prevProps) {
    if(prevProps.term !== this.props.term) {
      const { pathname } = this.props.location;
      const search = qs.stringify({ term: this.props.term });
      this.props.history.push(`${pathname}?${search}`);
    }
  }

  render(){
    return <SearchForm {...this.props} />;
  }
}

const mapStateToProps = state => ({
  term:  getSearchTerm(state),
  color: getColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      term: updateSearchTerm,
      color: updateColor
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  updateSearchTerm(term) {
    dispatch(updateSearchTerm(term));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchWords));
