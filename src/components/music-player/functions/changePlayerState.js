import axios from "axios";

// API CALL TO PLAY/PAUSE TRACK
const changePlayerState = async (token, currentTrack, setCurrentTrack) => {
  const playState = currentTrack.trackIsPlaying ? "pause" : "play";
  await axios.put(
    `https://api.spotify.com/v1/me/player/${playState}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const updatedCurrentTrackState = {
    ...currentTrack,
    trackIsPlaying: !currentTrack.trackIsPlaying,
  };
  setCurrentTrack(updatedCurrentTrackState);
};

export default changePlayerState