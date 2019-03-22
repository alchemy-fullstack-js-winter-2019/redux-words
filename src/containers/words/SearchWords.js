import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { updateSearchTerm } from '../../actions/words';

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
  handleSubmit(event) {
    event.preventDefault();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
