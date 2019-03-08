import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getFirstWordsByTerm } from '../../selectors/words';
import { getSearchTerm } from '../../selectors/words';
import { updateWords } from '../../actions/words';



const mapStateToProps = (state, props) => ({
  words: getFirstWordsByTerm(state, props.match.params.count || 1000),
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
)(Words);
