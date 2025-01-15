import Image from "next/image";
import LikedSongsImg from "../../../assets/images/liked-songs-img.png";

import "../styles/liked-songs-banner.css";

function LikedSongsBanner({ likedSongsInfo }) {
  return (
    <div className="liked-songs--banner grid">
      <div className="liked-songs--banner-img-container">
        <Image
          className="liked-songs--img"
          src={LikedSongsImg}
          alt="liked songs img"
        />
      </div>
      <div className="liked-songs--banner-info-container grid">
        <p className="liked-songs--type">Playlist</p>
        <p className="liked-songs--name">Liked Songs</p>
        <p className="liked-songs--total-tracks">{`${likedSongsInfo.trackNum} songs`}</p>
      </div>
    </div>
  );
}

export default LikedSongsBanner;
