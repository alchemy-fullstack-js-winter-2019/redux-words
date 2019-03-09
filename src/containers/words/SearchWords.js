import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { updateSearchTerm } from '../../actions/words';
import qs from 'querystring';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SearchWords extends PureComponent {
  static propTypes = {
    term: PropTypes.string.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { term } = qs.parse(this.props.location.search.slice(1));
    if(term) {
      this.props.updateSearchTerm(term);
    }
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
  term: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
  updateSearchTerm(term) {
    dispatch(updateSearchTerm(term));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchWords));
