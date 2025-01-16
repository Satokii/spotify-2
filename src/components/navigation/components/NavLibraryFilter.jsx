"use client"

import Image from "next/image";
import { useState } from "react";

import CrossGray from "../../../assets/svgs/main-app/cross-gray.svg";

import "../styles/nav-library-filter.css";

function NavLibraryFilter({ setShowFilter }) {
  const INITIAL_NAV_FILTER_STATE = [
    {
      name: "Playlists",
      className: "navigation--inactive-library-filter",
    },
    {
      name: "Albums",
      className: "navigation--inactive-library-filter",
    },
  ];

  const [libraryFilter, setLibraryFilter] = useState(INITIAL_NAV_FILTER_STATE);

  const toggleActiveLibraryFilter = (e) => {
    if (e.target.innerText === "Playlists") {
      setShowFilter("Playlists");
    }
    if (e.target.innerText === "Albums") {
      setShowFilter("Albums");
    }
    const updatedFilter = libraryFilter.map((filter) => {
      if (filter.name === e.target.innerText) {
        return { ...filter, className: "navigation--active-library-filter" };
      } else {
        return { ...filter, className: "navigation--inactive-library-filter" };
      }
    });
    setLibraryFilter(updatedFilter);
  };

  const resetPlaylistFilter = () => {
    setShowFilter("Playlists");
    setLibraryFilter(INITIAL_NAV_FILTER_STATE);
  };

  return (
    <div className="navigation--library-filter-container grid">
      {libraryFilter.map((filter, index) => (
        <div
          className={filter.className}
          key={`${filter.name}-${index}`}
          onClick={(e) => toggleActiveLibraryFilter(e)}
        >
          {filter.name}
        </div>
      ))}
      <div
        className="navigation--library-filter-none-container grid"
        onClick={() => resetPlaylistFilter()}
      >
        <Image
          className="navigation--library-filter-none-icon"
          src={CrossGray}
          alt="cross icon"
        />
      </div>
    </div>
  );
}

export default NavLibraryFilter;
