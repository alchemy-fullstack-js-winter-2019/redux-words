import React from 'react';
import TopWords from '../../containers/words/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Searchable from '../words/Searchable';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={TopWords} />
        <Route exact path={'/words/:count'} component={TopWords} />
        <Route exact path={'/search'} component={Searchable} />
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
}
