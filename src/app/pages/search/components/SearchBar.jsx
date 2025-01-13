import axios from "axios";
import { useState } from "react";

function SearchBar({
  token,
  setTrackResults,
  setArtistResults,
  setAlbumResults,
  setPlaylistResults,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchResult = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchQuery,
        type: "track,artist,album,playlist",
        limit: 8,
      },
    });
    setTrackResults(data.tracks.items);
    setArtistResults(data.artists.items);
    setAlbumResults(data.albums.items);
    setPlaylistResults(data.playlists.items);
  };

  return (
    <section className="searchbar grid">
      <form
        className="searchbar--form grid"
        onSubmit={(e) => getSearchResult(e)}
      >
        <input
          type="text"
          placeholder="What do you want to listen to?"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search" type="reset"></button>
      </form>
    </section>
  );
}

export default SearchBar;
