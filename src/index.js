import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Sub from "./components/Optin/Sub";
import ReactAudioPlayer from 'react-audio-player';
import "./styles.css";
import Music from "./assets/music.mp3"

function App() {
  return (
    
    <div className="App">
      <ReactAudioPlayer className="musicplayer"
  src={Music}
  autoPlay
  controls
  loop
/>
      <div className="container">
        <h1>
          Coming Soon!
        </h1>
        <Timer />
        <Sub />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
