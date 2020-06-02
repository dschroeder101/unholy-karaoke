import React from 'react';
import AudioTrack from './AudioTrack'
import { ListGroup } from 'react-bootstrap'

class TrackSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const btns = this.props.tracks.map(([trackName, artist]) => {
            return (
                <ListGroup.Item 
                onClick={(e) => this.props.changeTrack(trackName)}
                className={this.props.selectedTrack === trackName?"active":""}>
                    <AudioTrack trackName={trackName} artist={artist} />
                </ListGroup.Item>
            );
        });
        return <ListGroup>{btns}</ListGroup>
    }
}

export default TrackSelector;