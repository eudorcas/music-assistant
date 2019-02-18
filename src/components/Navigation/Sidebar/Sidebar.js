import React from 'react';
import NavigationElements from '../NavigationElements/NavigationElements';
import Backdrop from './Backdrop/Backdrop';
import classes from './Sidebar.css';


const sidebar = (props) => {
    let navClasses = [classes.Sidebar, classes.close];
    if (props.opened) {
        navClasses = [classes.Sidebar, classes.open];
    }
    return (
        <>
            <Backdrop show={props.opened} clicked={props.backdropClicked}/>
            <div className={navClasses.join(" ")}>
                <nav className={classes.NavigationElements}>
                    <NavigationElements/>
                </nav>
            </div>
        </>
    );
};

export default sidebar;