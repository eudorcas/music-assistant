import React from 'react';
import classes from './Logo.css';
import img from '../../assets/images/logo.png';


const logo = () => {
   return (
       <div className={classes.Logo}>
           <img src={img} alt={"logo"} />
       </div>
   )
};

export default logo;
