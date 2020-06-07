import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to unholy-karaoke</h1>
                <h3>All the hits you love, now in one convenient media player.</h3>
            </div>
        );
    }
}

export default Header;