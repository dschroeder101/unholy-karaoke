import React from 'react';
import Bark from './audio/bark.ogg';
import Drip from './audio/drip.ogg';
import Glass from './audio/glass.ogg';
import Sonar from './audio/sonar.ogg';
import TrackSelector from './TrackSelector'
import AudioPlayerControls from './AudioPlayerControls'

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            audioTracks: [
                ["Thunderstruck", "AC/DC", Bark],
                ["Daughter", "Pearl Jam", Drip],
                ["How You Remind Me", "Nickelback", Glass],
                ["Billie Jean", "Michael Jackson", Sonar]
            ],
            selectedTrack: "Thunderstruck"
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
            const [trackName, , file] = track;
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
                <AudioPlayerControls playAudio={this.playAudio}/>
            </div>
        )
    }
}

export default AudioPlayer;