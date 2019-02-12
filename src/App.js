import React, {Component} from 'react';
import Piano from './containers/Piano/Piano';
import classes from './App.css';

class App extends Component {


    render() {
        return (
            <div className={classes.App}>
                <p>Piano</p>
                <Piano />
            </div>
        );
    }
}

export default App;
