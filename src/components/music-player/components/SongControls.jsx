function SongControls({ token, currentTrack, setCurrentTrack }) {
  const togglePlayBtn = currentTrack.trackIsPlaying ? pauseButton : playButton;

  return (
    <div className="song-controls grid">
      <div
        className="back-btn"
        onClick={() => skipTrack(token, currentTrack, "previous")}
      >
        <img src={backButton} alt="skip back button" />
      </div>
      <div
        className="play-btn"
        onClick={() => changePlayerState(token, currentTrack, setCurrentTrack)}
      >
        <img src={togglePlayBtn} alt="play/pause button" />
      </div>
      <div
        className="forward-btn"
        onClick={() => skipTrack(token, currentTrack, "next")}
      >
        <img src={forwardButton} alt="skip forward button" />
      </div>
    </div>
  );
}

export default SongControls;
