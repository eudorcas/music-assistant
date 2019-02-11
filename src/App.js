import React, {Component} from 'react';
import './App.css';

class App extends Component {
    blackHandleClick = () => {
        console.log("black");
    };
    whiteHandleClick = () => {
        console.log("white");
    };

    render() {
        return (
            <div className="App">
                <p>Piano</p>
                <div className={"piano"}>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"black"} onClick={this.blackHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"black"} onClick={this.blackHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"black"} onClick={this.blackHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"black"} onClick={this.blackHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"black"} onClick={this.blackHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"white"} onClick={this.whiteHandleClick}></div>
                    <div className={"black desktop"} onClick={this.blackHandleClick}></div>
                    <div className={"white desktop"} onClick={this.whiteHandleClick}></div>
                    <div className={"black desktop"} onClick={this.blackHandleClick}></div>
                    <div className={"white desktop"} onClick={this.whiteHandleClick}></div>
                    <div className={"white desktop"} onClick={this.whiteHandleClick}></div>
                    <div className={"black desktop"} onClick={this.blackHandleClick}></div>
                    <div className={"white desktop"} onClick={this.whiteHandleClick}></div>
                    <div className={"black desktop"} onClick={this.blackHandleClick}></div>
                    <div className={"white desktop"} onClick={this.whiteHandleClick}></div>
                    <div className={"black desktop"} onClick={this.blackHandleClick}></div>
                    <div className={"white desktop"} onClick={this.whiteHandleClick}></div>
                </div>
            </div>
        );
    }
}

export default App;
