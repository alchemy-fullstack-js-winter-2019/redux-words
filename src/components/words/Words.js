import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Words extends PureComponent {
    static propTypes = {
      words: PropTypes.array.isRequired
    };
    render() {
      const wordList = this.props.words.map((word, i) => {
        return <li key={i}>{word}</li>;
      });
      return (
        <ol>
          {wordList}   
        </ol>
      );
    }
}
