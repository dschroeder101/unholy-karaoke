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
                ["Billie Jean", "Michael Jackson", Sonar],
                ["Highway to Hell", "AC/DC", Sonar]
            ],
            selectedTrack: "Thunderstruck"
        };

        this.playAudio = () => {
            console.log("Playing track: " + this.state.selectedTrack +"...")
            this[this.state.selectedTrack].play();
        }

        this.changeTrack = trackName => {
            console.log("Changing track to " + trackName + "...")
            this.setState({
                selectedTrack: trackName
            },
            () => {
                this.playAudio();
            });
        }
        
        this.playRandom = () => {
            console.log("Playing random track...");
            const [trackName] = this.state.audioTracks[Math.floor(Math.random() * (this.state.audioTracks.length))];

            if(trackName === this.state.selectedTrack) {
                this.playRandom();
            } else {
                this.setState({
                    selectedTrack: trackName
                },
                () => {
                    this.playAudio();
                });
            }
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
                <AudioPlayerControls playRandom={this.playRandom}/>
            </div>
        )
    }
}

export default AudioPlayer;