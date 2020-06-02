import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class AudioTrack extends React.Component {
    constructor(props) {
        super(props);

        this.image = this.props.image;
        this.artist = this.props.artist;
        this.trackName = this.props.trackName;
    }

    render() {
        return(
            <Container fluid>
                <Col>
                    <Row>
                        <img src={this.image}></img>
                        <h3>{this.trackName} - {this.artist}</h3>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default AudioTrack;