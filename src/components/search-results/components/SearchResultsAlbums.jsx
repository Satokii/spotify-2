import Link from "next/link";
import Image from "next/image";
import fixLengthSearch from "@/shared-functions/fixLengthSearch";
import fixLengthPlaylistAlbum from "@/shared-functions/fixLengthPlaylistAlbum";
import scrollToTop from "@/shared-functions/scrollToTop";
import getYear from "@/shared-functions/getYear";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg";

function SearchResultsAlbums({ albumResults }) {
  return (
    <div className="search-results-card--container grid">
      <h3 className="search-results-card-header">Albums</h3>
      <ul className="search-results-card--list grid">
        {albumResults.map((album, index) => (
          <Link
            className="search-results-card--single grid"
            key={`${album.id}-${index}`}
            href={`/album/${album.id}/${album.artists[0].id}`}
            onClick={scrollToTop}
          >
            <div className="search-results-card--img-outer-container">
              {album.images.length ? (
                <div className="search-results-card--img-container">
                  <img
                    className="search-results--card-img-sq"
                    src={album.images[0].url}
                    alt="album image"
                  />
                  <Image
                    className="search-results-card--play"
                    src={PlayGreen}
                    alt="play button"
                  />
                </div>
              ) : (
                <div className="search-results--card-img-sq"></div>
              )}
            </div>
            <p className="search-results--card-name">
              {fixLengthSearch(album.name)}
            </p>
            <p className="search-results--card-type">
              {<span>{getYear(album.release_date)}</span>} &bull;{" "}
              {fixLengthPlaylistAlbum(album.artists[0].name)}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsAlbums;
