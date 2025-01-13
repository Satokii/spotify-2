import { useState } from "react";
import Image from "next/image";

import MainPlayBtn from "../../../../assets/svgs/main-app/main-play-btn.svg";
import MainPauseBtn from "../../../../assets/svgs/main-app/main-pause-btn.svg"
import GreenShuffleBtn from "../../../../assets/svgs/main-app/shuffle-green.svg"
import GrayShuffleBtn from "../../../../assets/svgs/main-app/shuffle-gray.svg"
import GreenHeart from "../../../../assets/svgs/main-app/heart-green.svg"
import GrayHeart from "../../../../assets/svgs/main-app/heart-gray.svg"
import MenuDots from "../../../../assets/svgs/main-app/menu-dots.svg"

function AlbumControls() {
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
    <div className="album-page--controls grid">
      {play ? (
        <Image
          className="album-page--pause-btn"
          src={MainPauseBtn}
          alt="pause btn green"
          onClick={togglePlayAlbum}
        />
      ) : (
        <Image
          className="album-page--play-btn"
          src={MainPlayBtn}
          alt="play btn green"
          onClick={togglePlayAlbum}
        />
      )}
      {shuffle ? (
        <Image
          className="album-page--shuffle-btn-green"
          src={GreenShuffleBtn}
          alt="shuffle btn green"
          onClick={toggleShuffle}
        />
      ) : (
        <Image
          className="album-page--shuffle-btn-gray"
          src={GrayShuffleBtn}
          alt="shuffle btn gray"
          onClick={toggleShuffle}
        />
      )}
      {saved ? (
        <Image
          className="album-page--heart-green"
          src={GreenHeart}
          alt="heart green"
          onClick={toggleSaved}
        />
      ) : (
        <Image
          className="album-page--heart-gray"
          src={GrayHeart}
          alt="heart gray"
          onClick={toggleSaved}
        />
      )}
      <Image className="album-page--menu-dots" src={MenuDots} alt="menu dots" />
    </div>
  );
}

export default AlbumControls;
