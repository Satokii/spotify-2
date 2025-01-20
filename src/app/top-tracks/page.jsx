"use client";

import { useEffect, useState } from "react";
import { useClient } from "@/components/ClientContext";
import axios from "axios";
import toggleTopTracksDate from "@/shared-functions/toggleTopTracksDate";
import TopTracksTopNav from "./components/TopTracksTopNav";

import "../top-played/styles/top-results-pages.css";
import "../top-played/styles/main-date-filter.css";

function TopTracks() {
  const {
    token,
    topTracksDate,
    setTopTracksDate,
    showTopTracks,
    setShowTopTracks,
  } = useClient();

  const [allTopTracks, setAllTopTracks] = useState([]);

  useEffect(() => {
    let top50;
    let top51To99;
    const getTop50TracksAll = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: showTopTracks,
            limit: 50,
          },
        }
      );
      top50 = data.items;
    };
    const getTop51To99TracksAll = async () => {
      await getTop50TracksAll();
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: showTopTracks,
            limit: 50,
            offset: 49,
          },
        }
      );
      top51To99 = data.items;
      top51To99.shift();
      const combinedTracks = top50.concat(top51To99);
      setAllTopTracks(combinedTracks);
    };
    getTop51To99TracksAll();
  }, [showTopTracks, token]);

  return (
    <div className="top-results-page-outer-container grid">
      <div className="scrollbar-top-results-page">
        <section className="top-results-page--container grid">
          <TopTracksTopNav setToken={setToken} />
          <h2 className="top-results-page--header">Top Tracks</h2>
          <ul className="top-results-page--filter date-filter-list grid">
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
          <ul className="top-results-page--list grid">
            {allTopTracks.map((track, index) => (
              <li
                className="top-results-page--item grid"
                key={`${track.id}-${index}`}
              >
                <p className="top-results-page--item-rank">{`${index + 1}`}</p>
                {track.album.images.length ? (
                  <img
                    src={track.album.images[0].url}
                    alt={`${track.name} image`}
                  />
                ) : (
                  <div>No Image</div>
                )}
                <p className="top-results-page--item-name">{track.name}</p>
                <p className="top-results-page--item-artist">
                  {track.artists[0].name}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default TopTracks;
