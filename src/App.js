import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Sidebar from './components/Navigation/Sidebar/Sidebar';
import Piano from './containers/Piano/Piano';
import Metronome from "./containers/Metronome/Metronome";
import classes from './App.css';


class App extends Component {
    state= {
        showSidebar: false
    };

    openSidebar = () => {
        this.setState({
            showSidebar: true
        })
    };

    closeSidebar = () => {
        this.setState({
            showSidebar: false
        })
    };

    render() {
        return (
            <BrowserRouter>
                <div className={classes.App}>
                    <Sidebar opened={this.state.showSidebar} backdropClicked={this.closeSidebar}/>
                    <Toolbar hamburgerClicked={this.openSidebar}/>
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
