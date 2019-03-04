import { connect } from 'react-redux';
import { getFirstWords } from '../../selectors/words';
import Words from '../../components/words/Words';

const mapStateToProps = state => ({
  words: getFirstWords(state, 1000)
});

export default connect(
  mapStateToProps
)(Words);
