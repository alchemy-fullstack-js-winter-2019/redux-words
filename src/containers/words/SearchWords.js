import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm, updateColor } from '../../actions/words';
import { getSearchTerm, getColor } from '../../selectors/words';
import PropTypes from 'prop-types';
import store from '../../store';

class SearchWords extends PureComponent {
  static propTypes = {
    term: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    store.dispatch(updateSearchTerm(this.props.term));
  }

  render(){
    return (
      <SearchForm
        term={this.props.term}
        color={this.props.color}
        onChange={this.props.onChange}
      />
    );
  }
}

const searchQuery = location.search.split('=').slice(1).join('');
const mapStateToProps = state => ({
  term: searchQuery || getSearchTerm(state),
  color: getColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      term: updateSearchTerm,
      color: updateColor
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWords);
