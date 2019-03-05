import React from 'react';
import TopWords from '../../containers/words/TopWords';
import Searchable from '../words/Searchable';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';


export default function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={TopWords} />
          <Route path="/words/:count" component={Searchable} />
        </Switch>
      </Router>
    );
 
  
}

