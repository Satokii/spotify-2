"use client"

import { useEffect, useState } from "react";
import getQueue from "../queue/functions/getQueue";
import seekToPosition from "./functions/seekToPosition";
import TrackSlider from "./components/TrackSlider";
import SongControls from "./components/SongControls";

import "./styles/music-player.css"

function MusicPlayer({ token, currentTrack, setCurrentTrack, setQueue }) {
  // HANDLE SLIDER POSITION - BOTH MANUAL AND AUTOMATIC
  const [sliderVal, setSliderVal] = useState(0);
  const [manualSeekVal, setManualSeekVal] = useState();

  const timeElapsed = Number(
    ((currentTrack.trackProgress / currentTrack.trackDuration) * 100).toFixed(0)
  );

  useEffect(() => {
    setSliderVal(timeElapsed);
  }, [timeElapsed]);

  useEffect(() => {
    seekToPosition(token, manualSeekVal);
  }, [manualSeekVal, token]);

  // CHECK TO UPDATE QUEUE WHEN TRACK CHANGES
  useEffect(() => {
    if (sliderVal >= 1 && sliderVal <= 3) {
      getQueue(token, setQueue);
    }
  }, [setQueue, sliderVal, token]);

  return (
    <section className="song-player-container grid">
      <SongControls
        token={token}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />
      <TrackSlider
        currentTrack={currentTrack}
        sliderVal={sliderVal}
        setSliderVal={setSliderVal}
        setManualSeekVal={setManualSeekVal}
      />
    </section>
  );
}

export default MusicPlayer;
