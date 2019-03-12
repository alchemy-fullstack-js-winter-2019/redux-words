import { connect } from 'react-redux';
import SearchForm from '../components/words/SearchForm';
import { getSearchTerm } from '../selectors/words';
import { updateWords } from '../actions/words';

const mapStateToProps = state => ({
  term: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateWords(target.value));
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
