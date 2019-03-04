import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/words';
import { getSearchTerm } from '../../selectors/words';

const mapStateToProps = state => ({
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
)(SearchForm);
