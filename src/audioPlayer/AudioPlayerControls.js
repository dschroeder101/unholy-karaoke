import React from 'react'

class AudioPlayerControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="audioPlayerControls">
            <button className="audioPlayerBtn" onClick={this.props.playAudio}>
                Play!
            </button>

            <button className="audioPlayerBtn">
                Surprise me...
            </button>
        </div>
        )
    }
}

export default AudioPlayerControls;