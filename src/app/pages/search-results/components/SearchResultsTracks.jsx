import { Link } from "react-router-dom";
import fixLengthSearchTracks from "@/shared-functions/fixLengthSearchTracks";
import GetSearchTrackArtists from "@/shared-functions/GetSearchTrackArtists";
import scrollToTop from "@/shared-functions/scrollToTop";

import "../styles/search-results-tracks.css";

function SearchResultsTracks({ trackResults }) {
  return (
    <div className="search-results-tracks--container grid">
      <h3 className="search-results-tracks--header">Songs</h3>
      <ul className="search-results-tracks--list grid">
        {trackResults.map((track, index) => (
          <li
            className="search-results-tracks--track grid"
            key={`${track.id}-${index}`}
          >
            {track.album.images.length ? (
              <img
                src={track.album.images[0].url}
                alt={`${track.name} image`}
              />
            ) : (
              <div>No Image</div>
            )}
            <div className="search-results-tracks--track-text-container grid">
              <Link
                className="search-results-tracks--track-name"
                to={`/album/${track.album.id}/${track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixLengthSearchTracks(track.name)}
              </Link>
              <p className="search-results-tracks--track-artist">
                {GetSearchTrackArtists(track)}
              </p>
            </div>
            <div className="search-results-tracks--track-time">
              {calcTrackTime(track.duration_ms)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsTracks;
