import React from 'react';
import classes from './MetronomeAnimation.css';

const metronomeAnimation = props => {
    const bigActive = [classes.BigBubble, classes.BigActive];
    const smallActive = [classes.SmallBubble, classes.SmallActive];
    console.log(props.counter);
    return (
        <div className={classes.MetronomeAnimation}>
            <div className={props.beating && props.counter === 1 ? bigActive.join(" ") : classes.BigBubble} />
            <div className={(props.beating && props.counter > 1) ? smallActive.join(" ") : classes.SmallBubble} />
        </div>
    );
};

export default metronomeAnimation;