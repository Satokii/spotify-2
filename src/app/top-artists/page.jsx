"use client";

import { useEffect, useState } from "react";
import { useClient } from "@/components/ClientContext";
import axios from "axios";
import toggleTopArtistsDate from "@/shared-functions/toggleTopArtistsDate";
import TopArtistsTopNav from "./components/TopArtistsTopNav";

import "../top-played/styles/top-results-pages.css";
import "../top-played/styles/main-date-filter.css";

function TopArtists() {
  const {
    token,
    setToken,
    topArtistsDate,
    setTopArtistsDate,
    showTopArtists,
    setShowTopArtists,
  } = useClient();

  const [allTopArtists, setAllTopArtists] = useState([]);

  useEffect(() => {
    let top50;
    let top51To99;
    const getTop50TracksAll = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: showTopArtists,
            limit: 50,
          },
        }
      );
      top50 = data.items;
    };
    const getTop51To99TracksAll = async () => {
      await getTop50TracksAll();
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: showTopArtists,
            limit: 50,
            offset: 49,
          },
        }
      );
      top51To99 = data.items;
      top51To99.shift();
      const combinedTracks = top50.concat(top51To99);
      setAllTopArtists(combinedTracks);
    };
    getTop51To99TracksAll();
  }, [showTopArtists, token]);

  return (
    <div className="top-results-page-outer-container grid">
      <div className="scrollbar-top-results-page">
        <section className="top-results-page--container grid">
          <TopArtistsTopNav setToken={setToken} />
          <h2 className="top-results-page--header">Top Artists</h2>
          <ul className="top-results-page--filter date-filter-list grid">
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
          <ul className="top-results-page--list grid">
            {allTopArtists.map((artist, index) => (
              <li
                className="top-results-page--item grid"
                key={`${artist.id}-${index}`}
              >
                <p className="top-results-page--item-rank">{`${index + 1}`}</p>
                {artist.images.length ? (
                  <img
                    src={artist.images[0].url}
                    alt={`${artist.name} image`}
                  />
                ) : (
                  <div>No Image</div>
                )}
                <p className="top-results-page--item-name">{artist.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default TopArtists;
