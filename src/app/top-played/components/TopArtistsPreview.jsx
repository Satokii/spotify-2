"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import fixLengthPreviews from "@/shared-functions/fixLengthPreviews";
import scrollToTop from "../../../shared-functions/scrollToTop";

function TopArtistsPreview({ token, showTopArtists }) {
  const [topArtistsPview, setTopArtistsPview] = useState([]);

  useEffect(() => {
    const getTopTracksPview = async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            time_range: showTopArtists,
            limit: 20,
          },
        }
      );
      setTopArtistsPview(data.items);
    };
    getTopTracksPview();
  }, [showTopArtists, token]);

  return (
    <section className="preview--container grid">
      <ul className="preview--list grid">
        {topArtistsPview.map((artist, index) => (
          <Link
            key={`${artist.id}-${index}`}
            href={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >
            <li className="preview--item grid">
              <p className="preview--item-rank">{`${index + 1}.`}</p>
              {artist.images.length ? (
                <img src={artist.images[0].url} alt={`${artist.name} image`} />
              ) : (
                <div>No Image</div>
              )}
              <div className="preview--item-text preview-top-artists">
                <p className="preview--item-name">
                  {fixLengthPreviews(artist.name)}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
export default TopArtistsPreview;
