"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useCallback } from "react";
import fixLengthPreviews from "@/shared-functions/fixLengthPreviews";
import scrollToTop from "../../../shared-functions/scrollToTop";

function RecentlyPlayed({ token }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [recentlyPlayedPlayCount, setRecentlyPlayedPlayCount] = useState([]);

  const getRecentlyPlayed = useCallback(async () => {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
        },
      }
    );
    setRecentlyPlayed(data.items);
  }, [token]);

  useEffect(() => {
    getRecentlyPlayed();
  }, [getRecentlyPlayed, token]);

  useEffect(() => {
    const calcTimesPlayed = () => {
      const newArr = [];
      recentlyPlayed.forEach((track) => {
        const checkDups = newArr.find(
          (updatedTrack) => updatedTrack.track.id === track.track.id
        );
        if (checkDups) {
          checkDups.timesPlayed += 1;
        } else {
          const updated = { ...track, timesPlayed: 1 };
          newArr.push(updated);
        }
      });
      setRecentlyPlayedPlayCount(newArr);
    };
    calcTimesPlayed();
  }, [recentlyPlayed]);

  const timeNow = new Date();

  const msToTime = (ms) => {
    let seconds = (ms / 1000).toFixed(0);
    let minutes = (ms / (1000 * 60)).toFixed(0);
    let hours = (ms / (1000 * 60 * 60)).toFixed(0);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
    if (seconds < 2) return seconds + " second";
    else if (seconds < 60) return seconds + " seconds";
    else if (minutes < 2) return minutes + " minute";
    else if (minutes < 60) return minutes + " minutes";
    else if (hours < 2) return hours + " hour";
    else if (hours < 24) return hours + " hours";
    else if (days < 2) return days + " day";
    else return days + " days";
  };

  return (
    <section className="recently-played--container grid">
      <div className="recently-played--header-container grid">
        <h3 className="recently-played--header">Recently Played</h3>
        <button
          className="recently-played--refresh-btn btn"
          onClick={getRecentlyPlayed}
        >
          Refresh
        </button>
      </div>
      <ul className="recently-played--list grid">
        {recentlyPlayed.map((track, index) => (
          <li
            className="recently-played--item grid"
            key={`${track.track.id}-${index}`}
          >
            <Link
              href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
              onClick={scrollToTop}
            >
              <p className="recently-played--time-since-played">{`Played ${msToTime(
                timeNow - new Date(track.played_at)
              )} ago`}</p>
              {track.track.album.images.length ? (
                <img
                  src={track.track.album.images[0].url}
                  alt={`${track.track.name} image`}
                />
              ) : (
                <div>No Image</div>
              )}
              <div className="recently-played--item-text grid">
                <p className="recently-played--item-name">
                  {fixLengthPreviews(track.track.name)}
                </p>
                <Link
                  className="recently-played--item-artist"
                  href={`/artist/${track.track.artists[0].id}`}
                  onClick={scrollToTop}
                >
                  {fixLengthPreviews(track.track.artists[0].name)}
                </Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentlyPlayed;
