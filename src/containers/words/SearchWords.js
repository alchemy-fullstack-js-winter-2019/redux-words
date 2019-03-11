import searchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../../actions/words';

const mapStateToProps = (state) => ({
    term: getSearchTerm(state)
});
const mapDispatchToProps = dispatch => ({
    onChange(event){
        event.preventDefault();
        dispatch(updateSearchTerm(event.target.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(searchForm);
