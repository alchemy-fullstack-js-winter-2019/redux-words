import React from 'react';
import Searchable from '../../components/words/Searchable';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Searchable}/>
        <Route exact path='/words/:count' component={Searchable}/>
      </Switch>
    </Router>
  );
}
