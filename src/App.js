import React, {Component} from 'react';
import Piano from './containers/Piano/Piano';
import Metronome from "./containers/Metronome/Metronome";
import classes from './App.css';


class App extends Component {


    render() {
        return (
            <div className={classes.App}>
                <Metronome/>
                {/*<Piano />*/}
            </div>
        );
    }
}

export default App;
