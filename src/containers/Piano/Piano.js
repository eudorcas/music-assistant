import React, {Component} from 'react';
import PianoKey from '../../components/PianoKey/PianoKey';

import classes from './Piano.css';


const pianoKeys = [
    {value: "c4", type: "white"},
    {value: "csharp4", type: "black"},
    {value: "d4", type: "white"},
    {value: "dsharp4", type: "black"},
    {value: "e4", type: "white"},
    {value: "f4", type: "white"},
    {value: "fsharp4", type: "black"},
    {value: "g4", type: "white"},
    {value: "gsharp4", type: "black"},
    {value: "a4", type: "white"},
    {value: "asharp4", type: "black"},
    {value: "b4", type: "white"},
    {value: "c5", type: "white"},
    {value: "csharp5", type: "black"},
    {value: "d5", type: "white"},
    {value: "dsharp5", type: "black"},
    {value: "e5", type: "white"},
    {value: "f5", type: "white"},
    {value: "fsharp5", type: "black"},
    {value: "g5", type: "white"},
    {value: "gsharp5", type: "black"},
    {value: "a5", type: "white"},
    {value: "asharp5", type: "black"},
    {value: "b5", type: "white"},
    {value: "c6", type: "white"}
];


class Piano extends Component {


    state = {
        playing: ""
    };


    handlePlay = (value) => {
        if (this.state.playing === value) {
            this.setState({
                playing: value.toUpperCase()
            });
        } else {
            this.setState({
                playing: value
            });
        }

    };


    render() {
        console.log("render", this.state.playing);
        const piano = pianoKeys.map(el => {
            return <PianoKey
                playing={this.state.playing} key={el.value} type={el.type}
                value={el.value}
                clicked={() => this.handlePlay(el.value)} />

        });
        // const whiteDesktop = [classes.white, classes.desktop];
        // const blackDesktop = [classes.black, classes.desktop];
        return (
            <div className={classes.Piano}>
                {piano}
            </div>
        )
    }
}

export default Piano;

