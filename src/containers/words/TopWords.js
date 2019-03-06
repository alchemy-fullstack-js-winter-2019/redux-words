import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Words from '../../components/words/Words';
import { getTopWordsByTerm, getColor } from '../../selectors/words';

const mapStateToProps = (state, props) => ({
  words: getTopWordsByTerm(state, props.match.params.count || 1000),
  color: getColor(state)
});

export default withRouter(connect(
  mapStateToProps
)(Words));
