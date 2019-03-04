import { connect } from 'react-redux';
import { getFirstWords } from '../../selectors/words';
import Words from '../../components/words/Words';

// TopWords should retrieve the first 1000 words
const mapStateToProps = (state, props) => ({
  words: getFirstWords(state, props.match.params.count || 1000)
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Words);
