import React from 'react';
import TopWords from '../words/TopWords';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <Router>
        <Switch>
          <Route exact to="/" component={TopWords} />
          <Route exact to="/words/:count" component={TopWords} />
        </Switch>
      </Router>
    </>
  );
}
