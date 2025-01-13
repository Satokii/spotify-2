import { useState } from "react";

import MainPlayBtn from "../../../../assets/svgs/main-app/main-play-btn.svg";

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
        <img
          className="album-page--pause-btn"
          src={MainPauseBtn}
          alt="pause btn green"
          onClick={togglePlayAlbum}
        />
      ) : (
        <img
          className="album-page--play-btn"
          src={MainPlayBtn}
          alt="play btn green"
          onClick={togglePlayAlbum}
        />
      )}
      {shuffle ? (
        <img
          className="album-page--shuffle-btn-green"
          src={GreenShuffleBtn}
          alt="shuffle btn green"
          onClick={toggleShuffle}
        />
      ) : (
        <img
          className="album-page--shuffle-btn-gray"
          src={GrayShuffleBtn}
          alt="shuffle btn gray"
          onClick={toggleShuffle}
        />
      )}
      {saved ? (
        <img
          className="album-page--heart-green"
          src={GreenHeart}
          alt="heart green"
          onClick={toggleSaved}
        />
      ) : (
        <img
          className="album-page--heart-gray"
          src={GrayHeart}
          alt="heart gray"
          onClick={toggleSaved}
        />
      )}
      <img className="album-page--menu-dots" src={MenuDots} alt="menu dots" />
    </div>
  );
}

export default AlbumControls;
