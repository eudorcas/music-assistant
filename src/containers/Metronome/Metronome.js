import React, {Component} from 'react';
import MetronomeControls from '../../components/MetronomeControls/MetronomeControls';
import MetronomeAnimation from '../../components/MetronomeAnimation/MetronomeAnimation';
import sound1 from '../../assets/audio/metronome/click1.wav';
import sound2 from '../../assets/audio/metronome/click2.wav';
import classes from './Metronome.css';

class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beatsPerMinute: 60,
            beating: false,
            beatsPerMeasure: "2",
            partOfMeasure: 0,
            interval: null

        };
        this.sound1 = new Audio(sound1);
        this.sound2 = new Audio(sound2);
    }


    changeBPMinuteHandler = (e) => {
        const bpm = e.currentTarget.value;
        if(this.state.beating) {
            clearInterval(this.state.interval);
            const interval = setInterval(
                this.playSound,
                (60 / bpm) * 1000);
            this.setState({
                beating: true,
                interval: interval,
                beatsPerMinute: bpm
            }, this.playSound);
        }
        else {
            this.setState({
                beatsPerMinute: bpm
            });
        }
    };
    changeBPMeasureHandler = (e) => {
        const bpm = e.currentTarget.value;
        if(this.state.beating) {
            clearInterval(this.state.interval);
            const interval = setInterval(this.playSound,
                (60 / this.state.beatsPerMinute) * 1000);
            this.setState({
                beatsPerMeasure: bpm,
                interval: interval
            }, this.playSound)
        }
        else {
            this.setState({
                beatsPerMeasure: bpm
            })
        }
    };

    playSound = () => {
        if(this.state.partOfMeasure % this.state.beatsPerMeasure === 0) {
            this.sound1.play();
        }
        else {
            this.sound2.play();
        }
        this.setState(prevState => ({
            partOfMeasure: (prevState.partOfMeasure + 1) % prevState.beatsPerMeasure
        }));
    };

    toggleBeat = () => {
        if (!this.state.beating) {
            const interval = setInterval(
                this.playSound,
                (60 / this.state.beatsPerMinute) * 1000);
            this.setState({
                beating: true,
                interval: interval
            }, this.playSound);
        }
        else {
            clearInterval(this.state.interval);
            this.setState({
                beating: false,
                interval: null,
                partOfMeasure: 0
            })
        }
    };

    render() {
        return (
            <div className={classes.Metronome}>
                <MetronomeAnimation
                    beating={this.state.beating}
                    counter={this.state.partOfMeasure}
                />
                <MetronomeControls
                    clicked={this.toggleBeat}
                    beating={this.state.beating}
                    beatsPerMinute={this.state.beatsPerMinute}
                    beatsPerMeasure={this.state.beatsPerMeasure}
                    changeBPMinuteHandler={this.changeBPMinuteHandler}
                    changeBPMeasureHandler={this.changeBPMeasureHandler}/>
            </div>
        );
    }
}

export default Metronome;
