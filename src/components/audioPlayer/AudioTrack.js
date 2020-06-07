import React from 'react';
import { Container, Row } from 'react-bootstrap'

class AudioTrack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <h3>{this.props.trackName} - {this.props.artist}</h3>
                </Row>
            </Container>
        )
    }
}

export default AudioTrack;