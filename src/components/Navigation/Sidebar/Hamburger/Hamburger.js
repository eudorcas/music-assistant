import React from 'react';
import classes from './Hamburger.css';

const hamburger = (props) => {
    return <div className={classes.Hamburger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
};

export default hamburger;
