import { connect } from 'react-redux';
import { getTopWordsByTerm } from '../../selectors/words';
import { withRouter } from 'react-router-dom';
import Words from '../../components/words/Words';

const mapStateToProps = (state, props) => ({
  words: getTopWordsByTerm(state, props.match.params.count || 1000)
});

export default withRouter(connect(
  mapStateToProps
)(Words));
