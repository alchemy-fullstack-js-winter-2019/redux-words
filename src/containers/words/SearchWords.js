import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import SearchForm from '../../components/words/SearchForm';
import { updateSearchTerm } from '../../actions/words';
import { getSearchTerm } from '../../selectors/words';
import PropTypes from 'prop-types';
import store from '../../store';

class Searchable extends PureComponent {
  static propTypes = {
    term: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    store.dispatch(updateSearchTerm(this.props.term));
  }

  render(){
    return (
      <SearchForm
        term={this.props.term}
        onChange={this.props.onChange}
      />
    );
  }
}

const searchQuery = location.search.split('=').slice(1).join('');
const mapStateToProps = state => ({
  term: searchQuery || getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchable);
