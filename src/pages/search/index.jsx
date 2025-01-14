import { useState } from "react";
// import SearchPageTopNav from "./components/SearchPageTopNav";
// import SearchPageBrowse from "./components/SearchPageBrowse";
// import SearchResults from "../search-results";
import SearchPageTopNav from "@/app/pages/search/components/SearchPageTopNav";
import SearchPageBrowse from "@/app/pages/search/components/SearchPageBrowse";
import SearchResults from "@/app/pages/search-results";
// import "./styles/search.css"

function Search({ token, setToken }) {
  const [trackResults, setTrackResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);
  const [albumResults, setAlbumResults] = useState([]);
  // const [playlistResults, setPlaylistResults] = useState([]);

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
            // setPlaylistResults={setPlaylistResults}
          />
          {trackResults.length > 0 ? (
            <SearchResults
              trackResults={trackResults}
              artistResults={artistResults}
              albumResults={albumResults}
            //   playlistResults={playlistResults}
            />
          ) : (
            <SearchPageBrowse />
          )}
          search here
        </section>
      </div>
    </div>
  );
}

export default Search;
