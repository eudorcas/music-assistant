import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Piano from './containers/Piano/Piano';
import Metronome from "./containers/Metronome/Metronome";
import classes from './App.css';


class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <div className={classes.App}>
                    <Toolbar />
                    <Switch>
                        <Route path={"/"} exact component={Piano} />
                        <Route path={"/metronome"} component={Metronome}/>
                        <Redirect to={"/"}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
