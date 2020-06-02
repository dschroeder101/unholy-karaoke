import React from 'react';
import Bark from './audio/bark.ogg';
import Drip from './audio/drip.ogg';
import Glass from './audio/glass.ogg';
import Sonar from './audio/sonar.ogg';
import TrackSelector from './TrackSelector'

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            audioTracks: [
                ["bark", "artist1", Bark],
                ["drip", "artist2", Drip],
                ["glass", "artist3", Glass],
                ["sonar", "artist4", Sonar]
            ],
            selectedTrack: "bark"
        };

        this.playAudio = () => {
            console.log("Playing track: " + this.state.selectedTrack +"...")
            this[this.state.selectedTrack].play();
        }

        this.changeTrack = track => {
            console.log("Changing track to " + track + "...")
            this.setState({
                selectedTrack: track
            });
        }
        
    }

    render() {
        const audioSources = this.state.audioTracks.map(track => {
            const [trackName, artist, file] = track;
            return (
                <audio ref={song => { this[trackName] = song; }}>
                    <source src={file} type="audio/ogg"/>
                </audio>
            )
        })

        return (
            <div>
                {audioSources}

                <TrackSelector selectedTrack={this.state.selectedTrack} changeTrack={this.changeTrack} tracks={this.state.audioTracks}/>

                <button onClick={this.playAudio}>
                    Play!
                </button>
            </div>
        )
    }
}

export default AudioPlayer;