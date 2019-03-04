import { connect } from 'react-redux';
import { getFirstWords } from '../../selectors/words';
import Words from '../../components/words/Words';

const mapStateToProps = (state, props) => ({
  words: getFirstWords(state, props.match.params.count || 1000)
});

export default connect(
  mapStateToProps
)(Words);
