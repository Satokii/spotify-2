import { useState } from "react";

import CurrentlyPlayingHeader from "./CurrentlyPlayingHeader";

function CurrentlyPlaying({ currentTrack, notPlaying }) {

  const [pulse, setPulse] = useState(false);

  return (
    <div className="main-playback--cur-playing-container grid">
      <CurrentlyPlayingHeader currentTrack={currentTrack} setPulse={setPulse} />
      <CurrentlyPlayingTrack
        currentTrack={currentTrack}
        notPlaying={notPlaying}
        pulse={pulse}
      />
    </div>
  );
}

export default CurrentlyPlaying;
