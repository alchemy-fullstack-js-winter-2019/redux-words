import React from 'react';
import Searchable from '../words/Searchable';
import TopWords from '../../containers/words/TopWords';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

export default function App() {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={TopWords}></Route>
        <Route path="/words/:count" component={Searchable}></Route>
        <Route path="/words/:count?search=hi" component={Searchable}></Route>
      </Switch>
    </Router>
  );
}
