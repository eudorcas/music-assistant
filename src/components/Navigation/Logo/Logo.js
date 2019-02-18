import React from 'react';
import img from '../../../assets/images/logo.png';
import classes from './Logo.css';


const logo = () => {
   return (
       <div className={classes.Logo}>
           <img src={img} alt={"logo"} />
       </div>
   )
};

export default logo;
