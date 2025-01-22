import Image from "next/image";
import Link from "next/link";

import LibraryIcon from "../../../../public/assets/svgs/main-app/library-icon.svg";
import PlusGray from "../../../../public/assets/svgs/main-app/plus-gray.svg";

import "../styles/nav-library-header.css";

function NavLibraryHeader() {
  return (
    <div className="navigation--library-header grid">
      <Image
        className="navigation--library-header-icon"
        src={LibraryIcon}
        alt="library icon"
      />
      <div className="navigation--library-header-text">Your Library</div>
      <Link
        className="navigation--library-create-playlist-btn grid"
        href={`/new-playlist`}
      >
        <Image
          className="navigation--library-header-plus-icon"
          src={PlusGray}
          alt="plus icon"
        />
      </Link>
    </div>
  );
}

export default NavLibraryHeader;
