import { connect } from 'react-redux';
import { PureComponent } from 'react';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { updateSearchTerm } from '../../actions/words';
import { withRouter } from 'react-router-dom';
import qs from 'querystring'


class SearchWords extends PureComponent {
  static propTypes = {

  } 
  componentDidMount() {
    const { term } = qs.term
  }
  render() {
    return <SearchForm {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  term: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchWords));
