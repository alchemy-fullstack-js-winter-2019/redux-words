import React, { Fragment } from 'react';
import TopWords from '../../containers/words/TopWords';
import Searchable from '../words/Searchable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/words/:count' component={Searchable}/>
          <Route exact path='/' component={TopWords}/>
        </Switch>
      </Router>
    </Fragment>
  );
    
}
