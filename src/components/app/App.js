import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import TopWords from '../../containers/TopWords';
import SearchWords from '../../containers/SearchWords';
import Searchable from '../../components/words/Searchable'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TopWords}/>
        <Route path='/words/:count' component={Searchable}/>
      </Switch>
    </Router>
  );
}
