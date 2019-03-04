import React from 'react';
import TopWords from '../../containers/words/TopWords';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return(
    <Router>
      <>
      <Route exact path='/' component={TopWords}/>
      <Route exact path='/words/:count' component={TopWords}/>
      </>
    </Router>
  );
}
