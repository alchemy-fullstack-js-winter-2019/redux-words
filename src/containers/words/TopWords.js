import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTopWordsByTerm, getWordColor, getBackgroundColor } from '../../selectors/words';
import Words from '../../components/words/Words';

const mapStateToProps = (state, props) => {
  console.log('words', state.words.dictionary);
  return {
    words: getTopWordsByTerm(state, props.match.params.count || 1000),
    wordColor: getWordColor(state),
    backgroundColor: getBackgroundColor(state)
  };
};

export default withRouter(connect(
  mapStateToProps,
)(Words));
