"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import getYear from "@/shared-functions/getYear";
import scrollToTop from "@/shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg";
import GrayCircle from "../../../assets/svgs/main-app/gray-circle.svg";

function ArtistAppearsOn({ token, artistId }) {
  const [appearsOnTracks, setAppearsOnTracks] = useState([]);

  useEffect(() => {
    const getAppearsOnTracks = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/albums`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            include_groups: "appears_on",
            limit: 8,
          },
        }
      );
      const { items } = data;
      setAppearsOnTracks(items);
    };
    getAppearsOnTracks();
  }, [artistId, token]);

  return (
    <div className="artist-page--section-container grid">
      <div className="artist--section-header-container grid">
        <h3 className="artist--section-header">Appears On</h3>
        <div className="artist-page--show-all">Show all</div>
      </div>
      <div className="artist--section-list grid">
        {appearsOnTracks.map((track, index) => (
          <Link
            className="artist--section-single-track grid"
            key={`${track.name}-${index}`}
            href={`/album/${track.id}/${track.artists[0].id}`}
            onClick={scrollToTop}
          >
            <div className="artist--section-img-outer-container">
              {track.images.length ? (
                <div className="artist--section-img-container">
                  <img
                    className="artist--section-img"
                    src={track.images[0].url}
                    alt="artist image"
                  />
                  <img
                    className="artist--section-play"
                    src={PlayGreen}
                    alt="play button"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="artist--section-name">{track.name}</div>
            <div className="artist--section-extra-card-details grid">
              <div className="artist--appears-on-date">
                {getYear(track.release_date)}
              </div>
              <img className="gray-circle" src={GrayCircle} alt="gray circle" />
              <div className="artist--section-album-type ">
                {track.album_type}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtistAppearsOn;
