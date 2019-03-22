import React from 'react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import { TopWords } from '../../containers/words/TopWords';
import { SearchTerm } from '../../containers/words/SearchTerm';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TopWords} />
        <Route exact path="/words/:count" component={SearchTerm} />
      </Switch>
    </Router>
  );
}
