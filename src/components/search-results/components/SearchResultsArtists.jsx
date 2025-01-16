import Link from "next/link";
import Image from "next/image";
import scrollToTop from "@/shared-functions/scrollToTop";
import fixLengthSearch from "@/shared-functions/fixLengthSearch";
import PlayGreen from "../../../../public/assets/svgs/main-app/main-play-btn.svg"

function SearchResultsArtists({ artistResults }) {
  return (
    <div className="search-results-card--container grid">
      <h3 className="search-results-card-header">Artists</h3>
      <ul className="search-results-card--list grid">
        {artistResults.map((artist, index) => (
          <Link
            className="search-results-card--single grid"
            key={`${artist.id}-${index}`}
            href={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >
            <div className="search-results-card--img-outer-container">
              {artist.images.length ? (
                <div className="search-results-card--img-container">
                  <img
                    className="search-results--card-img"
                    src={artist.images[0].url}
                    alt="artist image"
                  />
                  <Image
                    className="search-results-card--play"
                    src={PlayGreen}
                    alt="play button"
                  />
                </div>
              ) : (
                <div className="search-results--card-img"></div>
              )}
            </div>
            <p className="search-results--card-name">
              {fixLengthSearch(artist.name)}
            </p>
            <p className="search-results--card-type">Artist</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultsArtists;
