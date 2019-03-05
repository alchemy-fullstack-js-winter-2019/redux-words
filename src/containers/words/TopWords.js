import { connect } from 'react-redux';
import { getFirstWordsByTerm } from '../../selectors/words';
import Words from '../../components/words/Words';
import { withRouter } from 'react-router-dom';

const mapStateTopProps = (state, props) => ({
  words: getFirstWordsByTerm(state, props.match.params.count || 1000)
});

export default withRouter(connect(
  mapStateTopProps
)(Words));

