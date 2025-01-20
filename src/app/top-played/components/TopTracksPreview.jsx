"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import fixLengthPreviews from "@/shared-functions/fixLengthPreviews";
import scrollToTop from "../../../shared-functions/scrollToTop";

function TopTracksPreview({ token, showTopTracks }) {
  const [topTracksPview, setTopTracksPview] = useState([]);

  useEffect(() => {
    const getTopTracksPview = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: showTopTracks,
            limit: 20,
          },
        }
      );
      setTopTracksPview(data.items);
    };
    getTopTracksPview();
  }, [showTopTracks, token]);

  return (
    <section className="preview--container grid">
      <ul className="preview--list grid">
        {topTracksPview.map((track, index) => (
          <li key={`${track.id}-${index}`}>
            <Link
              className="preview--item grid"
              href={`/album/${track.album.id}/${track.artists[0].id}`}
              onClick={scrollToTop}
            >
              <p className="preview--item-rank">{`${index + 1}.`}</p>
              {track.album.images.length ? (
                <img
                  src={track.album.images[0].url}
                  alt={`${track.name} image`}
                />
              ) : (
                <div>No Image</div>
              )}
              <div className="preview--item-text grid">
                <p className="preview--item-name">
                  {fixLengthPreviews(track.name)}
                </p>
                <Link
                  className="preview--item-artist"
                  href={`/artist/${track.artists[0].id}`}
                  onClick={scrollToTop}
                >
                  {fixLengthPreviews(track.artists[0].name)}
                </Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopTracksPreview;
