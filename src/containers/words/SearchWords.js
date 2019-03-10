import { connect } from 'react-redux'; 
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { updateSearchTerm } from '../../actions/words';
import { withRouter } from 'react-router-dom';
// import qs from 'querystring';

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
)(withRouter(SearchForm));
