import React from 'react';
import TopWords from '../../containers/words/TopWords';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Router> 
      <Route path="/topwords" exact component={TopWords} />
    </Router>
    </>
  );
}
