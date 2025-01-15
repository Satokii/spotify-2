"use client"

import { useState } from "react";
import Image from "next/image";
import MainPauseBtn from "../../../assets/svgs/main-app/main-pause-btn.svg";
import MainPlayBtn from "../../../assets/svgs/main-app/main-play-btn.svg";
import GreenShuffleBtn from "../../../assets/svgs/main-app/shuffle-green.svg";
import GrayShuffleBtn from "../../../assets/svgs/main-app/shuffle-gray.svg";
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg";

import "../styles/artist-controls.css";

function ArtistControls() {
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [follow, setFollow] = useState(false);

  const togglePlayArtist = () => {
    if (!play) setPlay(true);
    else setPlay(false);
  };

  const toggleShuffle = () => {
    if (!shuffle) setShuffle(true);
    else setShuffle(false);
  };

  const toggleFollow = () => {
    if (!follow) setFollow(true);
    else setFollow(false);
  };

  return (
    <div className="artist-page--controls grid">
      {play ? (
        <Image
          className="artist-page--pause-btn"
          src={MainPauseBtn}
          alt="pause btn green"
          onClick={togglePlayArtist}
        />
      ) : (
        <Image
          className="artist-page--play-btn"
          src={MainPlayBtn}
          alt="play btn green"
          onClick={togglePlayArtist}
        />
      )}
      {shuffle ? (
        <Image
          className="artist-page--shuffle-btn-green"
          src={GreenShuffleBtn}
          alt="shuffle btn green"
          onClick={toggleShuffle}
        />
      ) : (
        <Image
          className="artist-page--shuffle-btn-gray"
          src={GrayShuffleBtn}
          alt="shuffle btn gray"
          onClick={toggleShuffle}
        />
      )}
      {follow ? (
        <div className="artist-page--following" onClick={toggleFollow}>
          Following
        </div>
      ) : (
        <div className="artist-page--not-following" onClick={toggleFollow}>
          Follow
        </div>
      )}
      <Image className="artist-page--menu-dots" src={MenuDots} alt="menu dots" />
    </div>
  );
}

export default ArtistControls;
