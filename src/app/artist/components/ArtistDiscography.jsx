"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import getYear from "@/shared-functions/getYear";
import scrollToTop from "@/shared-functions/scrollToTop";

import GrayCircle from "../../../assets/svgs/main-app/gray-circle.svg";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg";

import "../styles/artist-discography.css";

function ArtistDiscography({ popularReleases, album, single }) {
  const FILTER_INITIAL_STATE = [
    {
      name: "Popular Releases",
      isActive: true,
      className: "active-artist--discography-filter",
    },
    {
      name: "Albums",
      isActive: false,
      className: "inactive-artist--discography-filter",
    },
    {
      name: "Singles and EPs",
      isActive: false,
      className: "inactive-artist--discography-filter",
    },
  ];

  const [activeFilter, setActiveFilter] = useState(FILTER_INITIAL_STATE);
  const [showDiscoItems, setShowDiscoItems] = useState("popular");

  const toggleDiscoFilter = (e) => {
    const updatedDiscoFilter = activeFilter.map((filter) => {
      if (filter.name === e.target.innerText)
        return {
          ...filter,
          className: "active-artist--discography-filter",
          isActive: true,
        };
      else
        return {
          ...filter,
          className: "inactive-artist--discography-filter",
          isActive: false,
        };
    });
    setActiveFilter(updatedDiscoFilter);
  };

  useEffect(() => {
    activeFilter.map((filter) => {
      if (filter.isActive) {
        if (filter.name === "Popular Releases") {
          setShowDiscoItems("popular");
        } else if (filter.name === "Albums") {
          setShowDiscoItems("albums");
        } else if (filter.name === "Singles and EPs") {
          setShowDiscoItems("singles");
        }
      }
    });
  }, [activeFilter]);

  const showFiltered = () => {
    if (showDiscoItems === "popular") {
      return popularReleases.map((item, index) => (
        <Link
          className="artist--section-single-track grid"
          key={`${item.name}-${index}`}
          href={`/album/${item.album.id}/${item.artists[0].id}`}
          onClick={scrollToTop}
        >
          <div className="artist--section-img-outer-container">
            {item.album.images.length ? (
              <div className="artist--section-img-container">
                <img
                  className="artist--section-img"
                  src={item.album.images[0].url}
                  alt={item.name}
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
          <div className="artist--section-name">{item.name}</div>
          <div className="artist--section-extra-card-details grid">
            <div>{getYear(item.album.release_date)}</div>
            <img className="gray-circle" src={GrayCircle} alt="gray circle" />
            <div className="artist--section-album-type ">
              {item.album.album_type}
            </div>
          </div>
        </Link>
      ));
    } else if (showDiscoItems === "albums") {
      return album.map((item, index) => (
        <Link
          className="artist--section-single-track grid"
          key={`${item.name}-${index}`}
          href={`/album/${item.id}/${item.artists[0].id}`}
          onClick={scrollToTop}
        >
          <div className="artist--section-img-outer-container">
            {item.images.length ? (
              <div className="artist--section-img-container">
                <img
                  className="artist--section-img"
                  src={item.images[0].url}
                  alt={item.name}
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
          <div className="artist--section-name">{item.name}</div>
          <div className="artist--section-extra-card-details grid">
            <div>{getYear(item.release_date)}</div>
            <img className="gray-circle" src={GrayCircle} alt="gray circle" />
            <div className="artist--section-album-type ">{item.album_type}</div>
          </div>
        </Link>
      ));
    } else if (showDiscoItems === "singles") {
      return single.map((item, index) => (
        <Link
          className="artist--section-single-track grid"
          key={`${item.name}-${index}`}
          href={`/album/${item.id}/${item.artists[0].id}`}
          onClick={scrollToTop}
        >
          <div className="artist--section-img-outer-container">
            {item.images.length ? (
              <div className="artist--section-img-container">
                <img
                  className="artist--section-img"
                  src={item.images[0].url}
                  alt={item.name}
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
          <div className="artist--section-name">{item.name}</div>
          <div className="artist--section-extra-card-details grid">
            <div>{getYear(item.release_date)}</div>
            <img className="gray-circle" src={GrayCircle} alt="gray circle" />
            <div className="artist--section-album-type ">{item.album_type}</div>
          </div>
        </Link>
      ));
    }
  };

  return (
    <div className="artist-page--discography grid">
      <div className="artist--section-header-container grid">
        <h3 className="artist--section-header">Discography</h3>
        <div className="artist-page--show-all">Show all</div>
      </div>
      <ul className="artist--discography-filter grid">
        {activeFilter.map((filter, index) => (
          <li
            className={filter.className}
            key={index}
            onClick={(e) => toggleDiscoFilter(e)}
          >
            {filter.name}
          </li>
        ))}
      </ul>
      <div className="artist--section-list grid">{showFiltered()}</div>
    </div>
  );
}

export default ArtistDiscography;
