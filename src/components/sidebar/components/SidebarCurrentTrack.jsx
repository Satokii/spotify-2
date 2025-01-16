import Link from "next/link";
import scrollToTop from "@/shared-functions/scrollToTop";
import fixLengthPreviews from "@/shared-functions/fixLengthPreviews";
import CurrentTrackArtists from "../functions/SidebarTrackArtists"

import "../styles/sidebar-current-track.css"

function SidebarCurrentTrack({ currentTrack, currentTrackArtists }) {

  return (
    <div className="sidebar--current-track-container grid">
      <Link
        className="sidebar--current-track-img-container"
        key={`sbarCurrentTrack${currentTrack.albumId}`}
        href={`/album/${currentTrack.albumId}/${currentTrack.artistId}`}
        onClick={scrollToTop}
      >
        <div>
          {currentTrack.trackImage ? (
            <img
              className="sidebar--current-track-img"
              src={currentTrack.trackImage}
              alt="current track img"
            />
          ) : (
            <div>Play a song on Spotify</div>
          )}
        </div>
      </Link>
      <Link
        className="sidebar--current-track-name"
        href={`/album/${currentTrack.albumId}/${currentTrack.artistId}`}
        onClick={scrollToTop}
      >
        {fixLengthPreviews(currentTrack.trackName)}
      </Link>
      <div>{CurrentTrackArtists(currentTrackArtists)}</div>
    </div>
  );
}

export default SidebarCurrentTrack;
