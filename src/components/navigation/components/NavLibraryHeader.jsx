import Image from "next/image";

import LibraryIcon from "../../../assets/svgs/main-app/library-icon.svg";
import PlusGray from "../../../assets/svgs/main-app/plus-gray.svg";

import "../styles/nav-library-header.css"

function NavLibraryHeader() {
  return (
    <div className="navigation--library-header grid">
      <Image
        className="navigation--library-header-icon"
        src={LibraryIcon}
        alt="library icon"
      />
      <div className="navigation--library-header-text">Your Library</div>
      <button className="navigation--library-create-playlist-btn grid">
        <Image
          className="navigation--library-header-plus-icon"
          src={PlusGray}
          alt="plus icon"
        />
      </button>
    </div>
  );
}

export default NavLibraryHeader;
