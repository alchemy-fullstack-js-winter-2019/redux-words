import { connect } from 'react-redux';
import { getTopWordsByTerm } from '../selectors/words';
import { updateSearchTerm } from '../components/actions/words';
import SearchForm from '../components/words/SearchForm';

const mapPropsToState = state => ({
  searchTerm: getTopWordsByTerm(state)
}
);
const mapDispatchToState = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapPropsToState,
  mapDispatchToState
)(SearchForm);
