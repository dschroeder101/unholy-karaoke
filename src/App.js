import React from 'react';
import './App.css';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import { Jumbotron } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron className="audioPlayer">
        <AudioPlayer />
      </Jumbotron>
      <Footer />
    </div>
  );
}

export default App;
