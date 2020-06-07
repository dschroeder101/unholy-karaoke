import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class AudioPlayerControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="audioPlayerControls">
                <Container>
                    <Row>
                        <Col>
                            <button className="audioPlayerBtn surpriseBtn" onClick={this.props.playRandom}>
                                Surprise me...
                            </button>   
                        </Col>
                        <Col xs={7}>
                            <button className="audioPlayerBtn stopButton" onClick={this.props.stopAudio}>
                               OMG make it stop...
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AudioPlayerControls;