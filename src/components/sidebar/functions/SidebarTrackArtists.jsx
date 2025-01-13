import { Link } from "react-router-dom";
import scrollToTop from "@/shared-functions/scrollToTop";

const SidebarTrackArtists = (artists) => {
  const numArtists = artists.length;
  if (numArtists === 1)
    return (
      <Link
        id={artists[0].id}
        className="sidebar--current-track-artist"
        to={`/artist/${artists[0].id}`}
        onClick={scrollToTop}
      >
        {artists[0].name}
      </Link>
    );
  else {
    const separated = artists.map((artist, index) => {
      if (index === numArtists - 1)
        return (
          <Link
            id={artist.id}
            className="sidebar--current-track-artist"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >
            {artist.name}
          </Link>
        );
      else if (index === 3)
        return (
          <Link
            id={artist.id}
            className="sidebar--current-track-artist"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}...`}</Link>
        );
      else
        return (
          <Link
            id={artist.id}
            className="sidebar--current-track-artist"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}, `}</Link>
        );
    });
    if (separated.length > 4) return separated.slice(0, 4);
    else return separated;
  }
};

export default SidebarTrackArtists;
