import React from 'react';
import AudioTrack from './AudioTrack'

class TrackSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const btns = this.props.tracks.map(([trackName]) => {
            return (
                <div>
                    <label>
                        <input
                            type="radio"
                            value="{track}"
                            checked={this.props.selectedTrack === trackName}
                            onChange={() => this.props.changeTrack(trackName)}
                            />
                            {trackName}
                    </label>
                </div>
            );
        });
        return <form>{btns}</form>
    }

}

export default TrackSelector;