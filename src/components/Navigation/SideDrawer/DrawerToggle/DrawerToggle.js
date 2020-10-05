import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    // <button> would be better if <div> isn't changed
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;