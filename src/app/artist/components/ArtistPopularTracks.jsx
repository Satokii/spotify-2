"use client"

import { useState } from "react";
import Image from "next/image";
import calcTrackTime from "@/shared-functions/calcTrackTime";
import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg";
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg";
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg";

import "../styles/artist-popular-tracks.css";

function ArtistPopularTracks({ topTracksArr, top5TracksArr }) {
  const [showAllTracks, setShowAllTracks] = useState(false);

  const toggleTopTracksShown = () => {
    if (!showAllTracks) setShowAllTracks(true);
    else setShowAllTracks(false);
  };

  return (
    <div className="artist-page--popular-tracks grid">
      <h2 className="artist--tracks-header">Popular</h2>
      <div className="artist--tracks-tracks grid">
        {(showAllTracks ? topTracksArr : top5TracksArr).map((track, index) => (
          <div
            className="artist-page--single-track grid"
            key={track.id}
            tabIndex={1}
          >
            <div className="artist-page--track-num-container">
              <div className="artist-page--track-number">{index + 1}</div>
              <Image
                className="artist-page--hover-play-btn"
                src={PlayButton}
                alt="play button"
                width={20}
              />
            </div>
            {track.album.images.length ? (
              <img
                className="artist-page--track-img"
                src={track.album.images[0].url}
                alt="track image"
              />
            ) : (
              <div className="artist-page--track-img"></div>
            )}
            <div className="artist-page--track-name">{track.name}</div>
            <Image
              className="artist-page--hide-like"
              src={GrayHeart}
              alt="gray heart"
            />
            <div className="artist-page--track-time">
              {calcTrackTime(track.duration_ms)}
            </div>
            <Image
              className="artist-page--track-dots"
              src={MenuDots}
              alt="menu dots"
            />
          </div>
        ))}
      </div>
      <div
        className="artist-page--expand-tracks"
        onClick={toggleTopTracksShown}
      >
        {showAllTracks ? <div>Show Less</div> : <div>See more</div>}
      </div>
    </div>
  );
}

export default ArtistPopularTracks;
