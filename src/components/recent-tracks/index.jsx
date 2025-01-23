"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import fixLengthQueue from "@/shared-functions/fixLengthQueue";
import scrollToTop from "../../shared-functions/scrollToTop";

import "./styles/recent-tracks.css"

function RecentTracks({ token }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const getRecentlyPlayed = async () => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 20,
        },
      }
    );
    setRecentlyPlayed(data.items);
  };

  useEffect(() => {
    getRecentlyPlayed();
  }, []);

  return (
    <div className="main-playback--recent-tracks-container grid">
      <h3 className="main-playback--recent-tracks-header">Recently Played...</h3>
      <div className="scrollbar--dashboard-recent-tracks grid">
        <div className="main-playback--recent-tracks-list grid">
          {recentlyPlayed.map((track, index) => (
            <Link
              className="main-playback--recent-tracks-item grid"
              key={`${track.track.id}-${index}`}
              href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
              onClick={scrollToTop}
            >
              {track.track.album.images.length ? (
                <img
                  src={track.track.album.images[0].url}
                  alt={`${track.track.name}-image`}
                />
              ) : (
                <div>No Image</div>
              )}
              <p className="main-playback--recent-tracks-track">
                {fixLengthQueue(track.track.name)}
              </p>
              <Link
                className="main-playback--recent-tracks-artist"
                href={`/artist/${track.track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixLengthQueue(track.track.artists[0].name)}
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentTracks;
