import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationElements.css';

const navigationElements = () => {
    return (
        <ul className={classes.NavigationElements}>
            <li className={classes.Element}>
                <NavLink to={"/"} exact activeClassName={classes.active}>Piano</NavLink>
            </li>
            <li className={classes.Element}>
                <NavLink to={"/metronome"} activeClassName={classes.active}>Metronome</NavLink>
            </li>
        </ul>
    )


};


export default navigationElements;