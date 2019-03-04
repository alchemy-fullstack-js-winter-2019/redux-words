import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getFirstWords } from '../../selectors/words';
// import { createWords } from '../../actions/words';

const mapStateProps = state => ({
  words: getFirstWords(state, 1000)
});

const WordContainer = connect(
  mapStateProps,
)(Words);  

export default WordContainer;
