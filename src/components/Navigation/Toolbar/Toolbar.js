import React from 'react';
import Logo from '../Logo/Logo';
import NavigationElements from '../NavigationElements/NavigationElements';
import classes from './Toolbar.css';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <h1>Music Assistant</h1>
            <nav className={classes.Desktop}>
                <NavigationElements />
            </nav>
        </header>
    );

};

export default toolbar;