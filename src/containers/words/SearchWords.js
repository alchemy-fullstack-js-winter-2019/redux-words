import { connect } from 'react-redux';
import { getSearchTerm } from '../../selectors/words';
import { updateSearchTerm } from '../../actions/words';
import SearchForm from '../../components/words/SearchForm';

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      searchTerm: updateSearchTerm
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
