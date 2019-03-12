import { connect } from 'react-redux';
import { getFirstWordsByTerm } from '../selectors/words';
import Words from '../components/words/Words';


const mapStateToProps = (state, props) => ({
  words: getFirstWordsByTerm(state, props.match.params.count || 1000)
});

export default connect(
  mapStateToProps
)(Words);
