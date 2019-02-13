import React from 'react';
import classes from './PianoKey.css';
import Sound from "react-sound";

const pianoKey = (props) => {
    const color = props.type === "white" ? classes.white : classes.black;
    const soundPath = require("../../assets/audio/" + props.value + ".mp3");

    return (
        <div className={color} onClick={props.clicked}>
            <Sound url={soundPath}
                   playStatus={props.playing === props.value ? Sound.status.PLAYING : Sound.status.STOPPED}/>
            <Sound url={soundPath}
                   playStatus={props.playing === props.value.toUpperCase() ? Sound.status.PLAYING : Sound.status.STOPPED}/>
        </div>
    )
};

export default pianoKey;