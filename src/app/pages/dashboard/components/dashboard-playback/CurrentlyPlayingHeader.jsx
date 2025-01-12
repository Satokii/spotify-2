import { useState } from "react";

import "../../styles/dashboard-playback/currently-playing-header.css"

function CurrentlyPlayingHeader({ currentTrack, setPulse }) {
  const [funBtnClass, setFunBtnClass] = useState("pulse-off");

  const playPulse = () => {
    if (funBtnClass === "pulse-on") {
      setFunBtnClass("pulse-off");
      setPulse(false);
    } else {
      setFunBtnClass("pulse-on");
      setPulse(true);
    }
  };

  return (
    <div className="main-playback--cur-playing-header-container grid">
      {currentTrack.trackIsPlaying ? (
        <h3 className="main-playback--cur-playing-header">Currently playing</h3>
      ) : (
        <h3 className="main-playback--cur-playing-header">Currently paused</h3>
      )}
      {currentTrack.trackIsPlaying ? (
        <div className="bars grid">
          <div className="bars__item"></div>
          <div className="bars__item"></div>
          <div className="bars__item"></div>
          <div className="bars__item"></div>
        </div>
      ) : (
        <div className="empty-bars grid">
          <div className="empty-bars__item"></div>
          <div className="empty-bars__item"></div>
          <div className="empty-bars__item"></div>
          <div className="empty-bars__item"></div>
        </div>
      )}
      <button
        className={`${funBtnClass} fun-btn grid`}
        type="submit"
        onClick={() => playPulse()}
      >
        Click me
      </button>
    </div>
  );
}

export default CurrentlyPlayingHeader;
