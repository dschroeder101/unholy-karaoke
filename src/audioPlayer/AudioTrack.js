import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class AudioTrack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <img src={this.props.image}></img>
                    <h3>{this.props.trackName} - {this.props.artist}</h3>
                </Row>
            </Container>
        )
    }
}

export default AudioTrack;