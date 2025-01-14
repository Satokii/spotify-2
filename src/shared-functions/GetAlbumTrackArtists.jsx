// import { Link } from "react-router-dom";
import Link from "next/link";
import scrollToTop from "./scrollToTop";

const GetAlbumTrackArtists = (track) => {
  const numArtists = track.artists.length;
  if (numArtists === 1)
    return (
      <Link
        id={track.artists[0].id}
        className="album-page--artist-name"
        href={`/artist/${track.artists[0].id}`}
        onClick={scrollToTop}
      >
        {track.artists[0].name}
      </Link>
    );
  else {
    const separated = track.artists.map((artist, index) => {
      if (index === numArtists - 1)
        return (
          <Link
            id={artist.id}
            className="album-page--artist-name"
            href={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >
            {artist.name}
          </Link>
        );
      else
        return (
          <Link
            id={artist.id}
            className="album-page--artist-name"
            href={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}, `}</Link>
        );
    });
    return separated;
  }
};

export default GetAlbumTrackArtists;
