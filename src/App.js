import React from 'react';
import logo from './logo.svg';
import './App.css';
import AudioPlayer from './audioPlayer/AudioPlayer'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to unholy-karaoke</h1>
        <h3>All the hits, now in one convenient media player.</h3>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
