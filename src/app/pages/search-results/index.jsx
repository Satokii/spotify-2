import SearchResultsTracks from './components/SearchResultsTracks';
import SearchResultsArtists from './components/SearchResultsArtists';
import SearchResultsAlbums from './components/SearchResultsAlbums';
import SearchResultsPlaylists from './components/SearchResultsPlaylists';

import './styles/search-results-generic.css'

function SearchResults({
  trackResults,
  artistResults,
  albumResults,
  playlistResults,
}) {
  return (
    <section className="search-results--container grid">
      <SearchResultsTracks trackResults={trackResults} />
      <SearchResultsArtists artistResults={artistResults} />
      <SearchResultsAlbums albumResults={albumResults} />
      <SearchResultsPlaylists playlistResults={playlistResults} />
    </section>
  );
}

export default SearchResults;
