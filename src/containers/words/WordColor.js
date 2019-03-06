import { connect } from 'react-redux';
import { getColor } from '../../selectors/words';
import { updateColor } from '../../actions/words';
import ColorPicker from '../../conponents/words/ColorPicker';

const mapStateToProps = state => ({
  color: getColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateColor(target.value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);
