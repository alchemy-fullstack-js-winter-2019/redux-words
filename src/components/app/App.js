import React from 'react';
import TopWords from '../../containers/words/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={TopWords} />
        <Route exact path={'/words/:count'} component={TopWords} />
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
}
