import React, { Component} from 'react';
import Sound from 'react-sound';
import fast from '../../assets/audio/cSharp4.mp3';
import slow from '../../assets/audio/d4.mp3';
import classes from './Piano.css';

const pianoKeys = [
     {value: "c3", type: "white"},
    {value: "c#3", type: "black"},
    {value: "d", type: "white"},
    {value: "d#3", type: "black"},
    {value: "e3", type: "white"},
    {value: "f3", type: "white"},
    {value: "f#3", type: "black"}

];

class Piano extends Component {
    state= {
        playing: "",
        repeat: false
    };
    blackHandleClick = () => {
        console.log("black");
        if (this.state.playing==="fast") {
            this.setState({repeat: true})
        }
        else {
            this.setState({
                playing: "fast",
                repeat: false
            })
        }
    };
    whiteHandleClick = () => {
        console.log("white");
        if (this.state.playing==="slow") {
            this.setState({repeat: true})
        }
        else {
            this.setState({
                playing: "slow",
                repeat: false
            })
        }

    };

    render() {
        console.log("render");
        const whiteDesktop = [classes.white, classes.desktop];
        const blackDesktop = [classes.black, classes.desktop];
        return (
        <div className={classes.Piano}>
            <p>{this.state.repeat ? "true" : "false"}</p>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.black} onClick={this.blackHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.black} onClick={this.blackHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.black} onClick={this.blackHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.black} onClick={this.blackHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.black} onClick={this.blackHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={classes.white} onClick={this.whiteHandleClick}></div>
            <div className={blackDesktop.join(" ")} onClick={this.blackHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <div className={blackDesktop.join(" ")} onClick={this.blackHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <div className={blackDesktop.join(" ")} onClick={this.blackHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <div className={blackDesktop.join(" ")} onClick={this.blackHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <div className={blackDesktop.join(" ")} onClick={this.blackHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <div className={whiteDesktop.join(" ")} onClick={this.whiteHandleClick}></div>
            <Sound url={fast} playStatus={((this.state.playing==='fast' && this.state.repeat) || this.state.playing==='fast') ? Sound.status.PLAYING : Sound.status.STOPPED} />
            <Sound url={slow} playStatus={((this.state.playing==='slow' &&  this.state.repeat) || this.state.playing==='slow')  ? Sound.status.PLAYING : Sound.status.STOPPED}/>
        </div>
        )
    }
}

export default Piano;