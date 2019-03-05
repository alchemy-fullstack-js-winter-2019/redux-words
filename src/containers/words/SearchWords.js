import { connect } from 'react-redux';
import { getSearchTerm, getColor } from '../../selectors/words';
import { updateSearchTerm, updateColor } from '../../actions/words';
import SearchForm from '../../components/words/SearchForm';
import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store';


export class SearchWords extends React.PureComponent {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    store.dispatch(updateSearchTerm(this.props.searchTerm));
  }
  
  render() {
    return (
      <SearchForm searchTerm={this.props.searchTerm} onChange={this.props.onChange} color={this.props.color} />
    );
  }
}

const searchQuery = location.search.split('=').slice(1).join('');

const mapStateToProps = state => ({
  searchTerm: searchQuery || getSearchTerm(state),
  color: getColor(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      searchTerm: updateSearchTerm,
      color: updateColor
    };
    dispatch(factoryMethod[target.name](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWords);
