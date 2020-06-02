import React from 'react';
import Bark from './audio/bark.ogg';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.playAudio = () => {
            console.log("Playing audio...")
            this.bark.play();
        }
    }

    render() {
        return (
            <div>
            <audio ref={(bark) => { this.bark = bark; }}>
                <source src={Bark} type="audio/ogg"></source>
            </audio>

            <button onClick={this.playAudio}>
                Play!
            </button>
        </div>
        )
    }
}

export default AudioPlayer;