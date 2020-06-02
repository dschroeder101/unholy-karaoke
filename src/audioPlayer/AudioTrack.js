import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class AudioTrack extends React.Component {
    constructor(props) {
        super(props);

        this.image = props.image;
        this.audioFile = props.audioFile;
        this.artist = props.artist;
        this.songTitle = props.songTitle;
    }

    render() {
        return(
            <Container fluid>
                <Col>
                    <Row>
                        <img src={this.image}></img>
                        <h3>{this.songTitle} - {this.artist}</h3>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default AudioTrack;