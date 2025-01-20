"use client"

import Link from "next/link";
import { useState } from "react";
import { useClient } from "@/components/ClientContext";
import TRACKS_INITIAL_STATE from "@/initial-states/TRACKS-INITIAL-STATE";
import ARTISTS_INITIAL_STATE from "@initial-states/ARTISTS-INITIAL-STATE";
import TopTracksPreview from "./components/TopTracksPreview";
import TopArtistsPreview from "./components/TopArtistsPreview";
import RecentlyPlayed from "./components/RecentlyPlayed";
// import toggleTopTracksDate from "../../shared-functions/toggleTopTracksDate";
// import toggleTopArtistsDate from "../../shared-functions/toggleTopArtistsDate";

// import "./styles/main.css";
// import "./styles/main-date-filter.css";
// import "./styles/main-preview-styles.css";
// import "./styles/main-recently-played.css";

function TopPlayed() {
    
    const { token } = useClient()

        // TOP TRACKS STATES
        const [topTracksDate, setTopTracksDate] = useState(TRACKS_INITIAL_STATE);
        const [showTopTracks, setShowTopTracks] = useState("long_term");
      
        // TOP ARTISTS STATES
        const [topArtistsDate, setTopArtistsDate] = useState(ARTISTS_INITIAL_STATE);
        const [showTopArtists, setShowTopArtists] = useState("long_term");

  return (
    <div className="scrollbar-main">
    <main className="main grid">
      <h2 className="main--header">My Dashboard</h2>
      <section className="top-tracks--container grid">
        <div className="top-tracks--header-container grid">
          <h3 className="top-tracks--header">Top Tracks Preview</h3>
          <Link 
            className="top-tracks--see-all-link"
            href="/top-tracks"
          >
            View Top 99 Tracks
          </Link>
        </div>
        <ul className="date-filter-list grid">
          {topTracksDate.map((dateFilter, index) => (
            <li
              key={`${dateFilter.title}-${index}`}
              className={dateFilter.className}
              onClick={(e) => {
                toggleTopTracksDate(e, topTracksDate, setTopTracksDate);
                setShowTopTracks(dateFilter.click);
              }}
            >
              {dateFilter.name}
            </li>
          ))}
        </ul>
        <TopTracksPreview token={token} showTopTracks={showTopTracks} />
      </section>
      <section className="top-artists--container grid">
        <div className="top-artists--header-container grid">
          <h3 className="top-artists--header">Top Artists Preview</h3>
          <Link
            className="top-artists--see-all-link"
            href="/top-artists"
          >
            View Top 99 Artists
          </Link>
        </div>
        <ul className="date-filter-list grid">
          {topArtistsDate.map((dateFilter, index) => (
            <li
              key={`${dateFilter.title}-${index}`}
              className={dateFilter.className}
              onClick={(e) => {
                toggleTopArtistsDate(e, topArtistsDate, setTopArtistsDate);
                setShowTopArtists(dateFilter.click);
              }}
            >
              {dateFilter.name}
            </li>
          ))}
        </ul>
        <TopArtistsPreview token={token} showTopArtists={showTopArtists} />
      </section>
      <RecentlyPlayed token={token} />
    </main>
    </div>
  );
}

export default TopPlayed;
