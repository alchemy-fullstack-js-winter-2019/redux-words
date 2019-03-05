import { Words } from '../../components/words/Words';
import { getSearchWords } from '../../selectors/words';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
    words: getSearchWords(state, props.match.params.count || 1000)
});

export default connect(mapStateToProps)(Words);
