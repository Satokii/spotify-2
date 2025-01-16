import Image from "next/image";

import skipTrack from "../functions/skipTrack";
import changePlayerState from "../functions/changePlayerState";

import forwardButton from "../../../../public/assets/svgs/player/forward-button.svg";
import backButton from "../../../../public/assets/svgs/player/back-button.svg";
import playButton from "../../../../public/assets/svgs/player/play-button.svg";
import pauseButton from "../../../../public/assets/svgs/player/pause-button.svg";

import "../styles/song-controls.css"

function SongControls({ token, currentTrack, setCurrentTrack }) {
  const togglePlayBtn = currentTrack.trackIsPlaying ? pauseButton : playButton;

  return (
    <div className="song-controls grid">
      <div
        className="back-btn"
        onClick={() => skipTrack(token, currentTrack, "previous")}
      >
        <Image src={backButton} alt="skip back button" />
      </div>
      <div
        className="play-btn"
        onClick={() => changePlayerState(token, currentTrack, setCurrentTrack)}
      >
        <Image src={togglePlayBtn} alt="play/pause button" />
      </div>
      <div
        className="forward-btn"
        onClick={() => skipTrack(token, currentTrack, "next")}
      >
        <Image src={forwardButton} alt="skip forward button" />
      </div>
    </div>
  );
}

export default SongControls;
