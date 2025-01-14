// import { Link } from "react-router-dom";
import Link from "next/link";
import scrollToTop from "@/shared-functions/scrollToTop";
import fixLengthNowPlaying from "@/shared-functions/fixLengthNowPlaying";
import NowPlayingTrackArtists from "./functions/NowPlayingTrackArtists";

import "./styles/now-playing.css";

function NowPlaying({ currentTrack, currentTrackArtists }) {
  return (
    <section className="now-playing--container grid">
      <Link
        className="now-playing--img"
        href={`/album/${currentTrack.albumId}/${currentTrack.artistId}`}
        onClick={scrollToTop}
      >
        {currentTrack.trackImageLength ? (
          <img
            src={currentTrack.trackImage}
            alt={`${currentTrack.trackName}-image`}
          />
        ) : (
          <div></div>
        )}
      </Link>
      <div className="now-playing--text-container grid">
        <div className="now-playing--track-name-container">
          <Link
            className="now-playing--track-name"
            href={`/album/${currentTrack.albumId}/${currentTrack.artistId}`}
            onClick={scrollToTop}
          >
            {fixLengthNowPlaying(currentTrack.trackName)}
          </Link>
        </div>
        <div className="now-playing--artist-container">
          {NowPlayingTrackArtists(currentTrackArtists)}
        </div>
        <p></p>
      </div>
    </section>
  );
}

export default NowPlaying;
