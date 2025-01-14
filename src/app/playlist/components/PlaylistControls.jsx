"use client"

import { useState } from "react";
import Image from "next/image";
import MainPlayBtn from "../../../assets/svgs/main-app/main-play-btn.svg";
import MainPauseBtn from "../../../assets/svgs/main-app/main-pause-btn.svg";
import GreenShuffleBtn from "../../../assets/svgs/main-app/shuffle-green.svg";
import GrayShuffleBtn from "../../../assets/svgs/main-app/shuffle-gray.svg";
import GreenHeart from "../../../assets/svgs/main-app/heart-green.svg";
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg";
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg";

function PlaylistControls() {
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [saved, setSaved] = useState(false);

  const togglePlayPlaylist = () => {
    if (!play) setPlay(true);
    else setPlay(false);
  };

  const toggleShuffle = () => {
    if (!shuffle) setShuffle(true);
    else setShuffle(false);
  };

  const toggleSaved = () => {
    if (!saved) setSaved(true);
    else setSaved(false);
  };

  return (
    <div className="playlist-page--controls grid">
      {play ? (
        <Image
          className="playlist-page--pause-btn"
          href={MainPauseBtn}
          alt="pause btn green"
          onClick={togglePlayPlaylist}
        />
      ) : (
        <Image
          className="playlist-page--play-btn"
          href={MainPlayBtn}
          alt="play btn green"
          onClick={togglePlayPlaylist}
        />
      )}
      {shuffle ? (
        <Image
          className="playlist-page--shuffle-btn-green"
          href={GreenShuffleBtn}
          alt="shuffle btn green"
          onClick={toggleShuffle}
        />
      ) : (
        <Image
          className="playlist-page--shuffle-btn-gray"
          href={GrayShuffleBtn}
          alt="shuffle btn gray"
          onClick={toggleShuffle}
        />
      )}
      {saved ? (
        <Image
          className="playlist-page--heart-green"
          href={GreenHeart}
          alt="heart green"
          onClick={toggleSaved}
        />
      ) : (
        <Image
          className="playlist-page--heart-gray"
          href={GrayHeart}
          alt="heart gray"
          onClick={toggleSaved}
        />
      )}
      <Image
        className="playlist-page--menu-dots"
        href={MenuDots}
        alt="menu dots"
      />
    </div>
  );
}

export default PlaylistControls;
