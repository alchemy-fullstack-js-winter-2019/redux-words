import React from 'react';
import TopWords from '../../containers/words/TopWords';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchable from '../words/Searchable';

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={TopWords} />
          <Route path="/words/:count" component={Searchable} />
        </Switch>
      </Router>
    </>
  );
}
