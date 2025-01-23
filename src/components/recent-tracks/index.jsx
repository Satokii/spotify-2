"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import fixLengthQueue from "@/shared-functions/fixLengthQueue";
import scrollToTop from "../../shared-functions/scrollToTop";

function RecentTracks({ token }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const getRecentlyPlayed = useCallback(async () => {
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
  }, [token]);

  useEffect(() => {
    getRecentlyPlayed();
  }, [getRecentlyPlayed, token]);

  return (
    <div className="main-playback--queue-container grid">
      <h3 className="main-playback--queue-header">Next in queue...</h3>
      <div className="scrollbar--dashboard-queue grid">
        <div className="main-playback--queue-list grid">
          {recentlyPlayed.map((track, index) => (
            <Link
              className="main-playback--queue-item grid"
              key={`${track.id}-${index}`}
              href={`/album/${track.album.id}/${track.artists[0].id}`}
              onClick={scrollToTop}
            >
              {track.album.images.length ? (
                <img
                  src={track.album.images[0].url}
                  alt={`${track.name}-image`}
                />
              ) : (
                <div>No Image</div>
              )}
              <p className="main-playback--queue-track">
                {fixLengthQueue(track.name)}
              </p>
              <Link
                className="main-playback--queue-artist"
                href={`/artist/${track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixLengthQueue(track.artists[0].name)}
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentTracks;
