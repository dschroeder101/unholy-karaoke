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
                            <button className="audioPlayerBtn playBtn" onClick={this.props.playAudio}>
                                Play track!
                            </button>
                        </Col>
                        <Col>
                            <button className="audioPlayerBtn surpriseBtn" onClick={this.props.playRandom}>
                                Surprise me...
                            </button>   
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AudioPlayerControls;