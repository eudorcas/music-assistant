import React from 'react';
import classes from './PianoKey.css';
import Sound from "react-sound";

const pianoKey = (props) => {
    const color = props.type === "white" ? classes.white : classes.black;
    const soundPath = require("../../assets/audio/" + props.value + ".mp3");
    const desktop = props.id > 12 ? classes.desktop : null;
    const keyClasses = [color, desktop].join(" ");

    return (
        <div className={keyClasses} onClick={props.clicked}>
            <Sound url={soundPath}
                   playStatus={props.playing === props.value ? Sound.status.PLAYING : Sound.status.STOPPED}/>
            <Sound url={soundPath}
                   playStatus={props.playing === props.value.toUpperCase() ? Sound.status.PLAYING : Sound.status.STOPPED}/>
        </div>
    )
};

export default pianoKey;