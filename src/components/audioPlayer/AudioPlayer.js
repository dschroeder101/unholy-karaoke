import React from 'react';

import Thunderstruck from './audio/thunderstruck.ogg';
import Daughter from './audio/daughter.ogg';
import BillieJean from './audio/billiejean.ogg';
import Nickelback from './audio/nickelback.ogg';
import TrackSelector from './TrackSelector'
import AudioPlayerControls from './AudioPlayerControls'

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            audioTracks: [
                ["Thunderstruck", "AC/DC", Thunderstruck],
                ["Daughter", "Pearl Jam", Daughter],
                ["How You Remind Me", "Nickelback", Nickelback],
                ["Billie Jean", "Michael Jackson", BillieJean]
            ],
            selectedTrack: "Thunderstruck"
        };

        this.playAudio = () => {
            this[this.state.selectedTrack].play();
        }

        this.stopAudio = () => {
            this[this.state.selectedTrack].pause();
            this[this.state.selectedTrack].currentTime = 0;
        }

        this.changeTrack = trackName => {
            this.stopAudio();
            this.setState({
                selectedTrack: trackName
            },
            () => {
                this.playAudio();
            });
        }
        
        this.playRandom = () => {
            this.stopAudio();
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
                <AudioPlayerControls playRandom={this.playRandom} stopAudio={this.stopAudio}/>
            </div>
        )
    }
}

export default AudioPlayer;