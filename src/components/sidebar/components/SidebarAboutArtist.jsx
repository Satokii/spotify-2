"use client"

import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import scrollToTop from "@/shared-functions/scrollToTop";
import axios from "axios";
import fixLengthPreviews from "@/shared-functions/fixLengthPreviews";

import "../styles/sidebar-about-artist.css"

function SidebarAboutArtist({ token, currentTrack }) {
  
  const [artistInfo, setArtistInfo] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const sidebarArtistDetails = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${currentTrack.artistId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArtistInfo({
        name: fixLengthPreviews(data.name),
        followers: data.followers.total.toLocaleString(),
        img: data.images[0].url,
      });
    };
    sidebarArtistDetails();
  }, [currentTrack.artistId, token]);

  const toggleFollowing = () => {
    if (isFollowing) setIsFollowing(false);
    else setIsFollowing(true);
  };

  return (
    <div className="sidebar--about-artist grid">
      <div className="sidebar--about-artist-header">About the artist</div>
      {artistInfo.img ? (
        <img
          className="sidebar--about-artist-img"
          src={artistInfo.img}
          alt="current track artist img"
        />
      ) : (
        <div></div>
      )}
      <div className="sidebar--about-artist-details-container grid">
        <Link
          className="sidebar--about-artist-name"
          href={`/artist/${currentTrack.artistId}`}
          onClick={scrollToTop}
        >
          {artistInfo.name}
        </Link>
        {artistInfo.followers ? (
          <div className="sidebar--about-artist-followers">{`${artistInfo.followers} followers`}</div>
        ) : (
          <div></div>
        )}
        {isFollowing ? (
          <div
            className="sidebar--about-artist-follow"
            onClick={toggleFollowing}
          >
            Unfollow
          </div>
        ) : (
          <div
            className="sidebar--about-artist-follow"
            onClick={toggleFollowing}
          >
            Follow
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarAboutArtist;
