import { Link } from "react-router-dom";
import scrollToTop from "@/shared-functions/scrollToTop";

const SidebarNextInQueueArtists = (artists) => {
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
      else if (index === 0)
        return (
          <Link
            id={artist.id}
            className="sidebar--current-track-artist"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}, `}</Link>
        );
      else
        return (
          <Link
            id={artist.id}
            className="sidebar--current-track-artist"
            to={`/artist/${artist.id}`}
            onClick={scrollToTop}
          >{`${artist.name}... `}</Link>
        );
    });
    if (separated.length > 2) return separated.slice(0, 2);
    else return separated;
  }
};

export default SidebarNextInQueueArtists;
