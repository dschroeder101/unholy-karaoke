import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-footer">
                <p>Project made with React + Express</p>
                <p>GitHub repository can be found <a href="https://github.com/dschroeder101/unholy-karaoke" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
        )
    }
}

export default Footer;