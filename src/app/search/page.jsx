"use client";

import { useState } from "react";
import { useClient } from "@/components/ClientContext";
import SearchPageTopNav from "./components/SearchPageTopNav";
import SearchPageBrowse from "./components/SearchPageBrowse";
import SearchResults from "@/components/search-results";

import "./styles/search.css";
import WelcomePage from "../../components/welcome-page";

function Search() {
  const { token, setToken } = useClient();

  const [trackResults, setTrackResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);
  const [albumResults, setAlbumResults] = useState([]);
  //   const [playlistResults, setPlaylistResults] = useState([]);

  if (!token) {
    return <WelcomePage />;
  }

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
        </section>
      </div>
    </div>
  );
}

export default Search;
