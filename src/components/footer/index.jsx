import "./styles/footer.css"

function Footer({
  token,
  currentTrack,
  currentTrackArtists,
  setCurrentTrack,
  setQueue,
}) {
  return (
    <footer className="footer grid">
      <NowPlaying
        currentTrack={currentTrack}
        currentTrackArtists={currentTrackArtists}
      />
      <MusicPlayer
        token={token}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        setQueue={setQueue}
      />
      <VolumeControls token={token} />
    </footer>
  );
}

export default Footer;
