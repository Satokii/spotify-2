import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const GetSearchTrackArtists = (track) => {
  const numArtists = track.artists.length;
  if (numArtists === 1)
    return (
      <Link
        id={track.artists[0].id}
        className="album-page--artist-name"
        to={`/artist/${track.artists[0].id}`}
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
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >
            {artist.name}
          </Link>
        );
      else if (index === 2)
        return (
          <Link
            id={artist.id}
            className="album-page--artist-name"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}... `}</Link>
        );
      else
        return (
          <Link
            id={artist.id}
            className="album-page--artist-name"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}, `}</Link>
        );
    });
    if (separated.length > 3) return separated.slice(0, 3);
    else return separated;
  }
};

export default GetSearchTrackArtists;
