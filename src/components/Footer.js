import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-footer">
                <p>Project made with React.js</p>
                <p>GitHub repository can be found <a href="https://github.com/dschroeder101/unholy-karaoke" target="_blank">here</a>.</p>
            </div>
        )
    }
}

export default Footer;