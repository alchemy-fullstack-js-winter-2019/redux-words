import React from 'react';
import TopWords from '../../containers/words/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" component={TopWords} />
        </Switch>
      </>
    </Router>
  );
}
