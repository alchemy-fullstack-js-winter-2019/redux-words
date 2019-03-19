import { connect } from 'react-redux';
import SearchTerm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { UpdateSearchTerm } from '../../actions/words';

const mapStateToProps = state => ({
  SearchTerm: getSearchTerm(state)
});

const mapDispatchToState = dispatch => ({
  onChange({ target }) {
    dispatch(UpdateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(SearchTerm);
