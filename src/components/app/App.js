import React, { Component } from 'react';
import FirstWords from '../../containers/words/TopWords';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import SearchWords from '../../containers/words/SearchWords';


export default class App extends Component {
    render() {
        return (
            <Router>
                <>
                <SearchWords/>
                <Switch>
                    <Route exact path="/" component={FirstWords}/>
                    <Route exact path="/words/:count" component={FirstWords}/>
                </Switch>
                </>
            </Router>
        );
    }
}
