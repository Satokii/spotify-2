import Link from "next/link";
import scrollToTop from "@/shared-functions/scrollToTop";

function SidebarCurrentTrack({ currentTrack, currentTrackArtists }) {
  return (
    <div className="sidebar--current-track-container grid">
      <Link
        className="sidebar--current-track-img-container"
        to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`}
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
        to={`/album/${currentTrack.albumId}/${currentTrack.artistId}`}
        onClick={scrollToTop}
      >
        {fixLengthPreviews(currentTrack.trackName)}
      </Link>
      <div>{CurrentTrackArtists(currentTrackArtists)}</div>
    </div>
  );
}

export default SidebarCurrentTrack;
