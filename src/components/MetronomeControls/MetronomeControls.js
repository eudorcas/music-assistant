import React from 'react';
import classes from './MetronomeControls.css';

const metronomeControls = props => {
    return (
        <div className={classes.MetronomeControls}>
            <div className={classes.Minute}>
                <label><span className={classes.Bold}>{props.beatsPerMinute}</span> beats per minute
                    <input
                        className={classes.Range}
                        type={"range"}
                        min={"20"}
                        max={"220"}
                        step={"1"}
                        name={"bPMinute"}
                        value={props.beatsPerMinute}
                        onChange={props.changeBPMinuteHandler}/>

                </label>

            </div>
            <div className={classes.Measure}>
                <input
                    id={"2"}
                    type={"radio"}
                    name={"bPMeasure"}
                    value={"2"}
                    checked={props.beatsPerMeasure === "2"}
                    onChange={props.changeBPMeasureHandler}/>
                <label htmlFor={"2"}>2</label>

                <input
                    type={"radio"}
                    id={"3"}
                    name={"bPMeasure"}
                    value={"3"}
                    checked={props.beatsPerMeasure === "3"}
                    onChange={props.changeBPMeasureHandler}/>
                <label htmlFor={"3"}>3</label>

                <input
                    type={"radio"}
                    id={"4"}
                    name={"bPMeasure"}
                    value={"4"}
                    checked={props.beatsPerMeasure === "4"}
                    onChange={props.changeBPMeasureHandler}/>
                <label htmlFor={"4"}>4</label>
                beats per measure
            </div>
            <button className={classes.Play} onClick={props.clicked}>{props.beating ? <i className="fas fa-pause"></i> :
                <i className="fas fa-play"></i>}</button>
        </div>
    );
};

export default metronomeControls;