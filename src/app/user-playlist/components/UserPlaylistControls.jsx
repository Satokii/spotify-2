"use client"

import { useState } from "react";
import MainPlayBtn from "../../../assets/svgs/main-app/main-play-btn.svg";
import MainPauseBtn from "../../../assets/svgs/main-app/main-pause-btn.svg";
import GreenShuffleBtn from "../../../assets/svgs/main-app/shuffle-green.svg";
import GrayShuffleBtn from "../../../assets/svgs/main-app/shuffle-gray.svg";
import GreenHeart from "../../../assets/svgs/main-app/heart-green.svg";
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg";
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg";

import "../styles/user-playlist-controls.css"

function UserPlaylistControls() {
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [saved, setSaved] = useState(false);

  const togglePlayAlbum = () => {
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
    <div className="user-playlist--controls grid">
      {play ? (
        <img
          className="user-playlist--pause-btn"
          src={MainPauseBtn}
          alt="pause btn green"
          onClick={togglePlayAlbum}
        />
      ) : (
        <img
          className="user-playlist--play-btn"
          src={MainPlayBtn}
          alt="play btn green"
          onClick={togglePlayAlbum}
        />
      )}
      {shuffle ? (
        <img
          className="user-playlist--shuffle-btn-green"
          src={GreenShuffleBtn}
          alt="shuffle btn green"
          onClick={toggleShuffle}
        />
      ) : (
        <img
          className="user-playlist--shuffle-btn-gray"
          src={GrayShuffleBtn}
          alt="shuffle btn gray"
          onClick={toggleShuffle}
        />
      )}
      {saved ? (
        <img
          className="user-playlist--heart-green"
          src={GreenHeart}
          alt="heart green"
          onClick={toggleSaved}
        />
      ) : (
        <img
          className="user-playlist--heart-gray"
          src={GrayHeart}
          alt="heart gray"
          onClick={toggleSaved}
        />
      )}
      <img
        className="user-playlist--menu-dots"
        src={MenuDots}
        alt="menu dots"
      />
    </div>
  );
}

export default UserPlaylistControls;
