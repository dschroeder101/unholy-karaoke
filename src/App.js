import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioPlayer from './audioPlayer/AudioPlayer';
import { Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to unholy-karaoke</h1>
        <h3>All the hits you love, now in one convenient media player.</h3>
        <div className="audioPlayer">
          <Jumbotron>
            <AudioPlayer />
          </Jumbotron>
        </div>
      </div>
    </div>
  );
}

export default App;
