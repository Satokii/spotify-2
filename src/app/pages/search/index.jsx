import { useState } from "react";

function Search({ token, setToken }) {
  const [trackResults, setTrackResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);
  const [albumResults, setAlbumResults] = useState([]);
  const [playlistResults, setPlaylistResults] = useState([]);

  return (
    <div className="search-page--outer-container grid">
      <div className="scrollbar-search-page">
        <section className="search-page-container grid">
          <SearchPageTopNav
            token={token}
            setToken={setToken}
            setTrackResults={setTrackResults}
            setArtistResults={setArtistResults}
            setAlbumResults={setAlbumResults}
            setPlaylistResults={setPlaylistResults}
          />
          {trackResults.length > 0 ? (
            <SearchResultsPage
              trackResults={trackResults}
              artistResults={artistResults}
              albumResults={albumResults}
              playlistResults={playlistResults}
            />
          ) : (
            <SearchPageBrowse />
          )}
        </section>
      </div>
    </div>
  );
}

export default Search;
