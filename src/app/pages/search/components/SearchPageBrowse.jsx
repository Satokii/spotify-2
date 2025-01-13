function SearchPageBrowse() {
  return (
    <div className="search-page-browse--container grid">
      <h2 className="search-page-browse--header">Browse all</h2>
      <section className="search-page-browse--genre-container grid">
        {genres.map((genre, index) => (
          <div
            className="browse--genre-item"
            key={`${genre.title}-${index}`}
            style={{ backgroundColor: genre.background }}
          >
            <h3 className="browse--genre-item-header">{genre.title}</h3>
            <img
              className="browse--genre-item-img"
              src={genre.img}
              alt={`${genre.genre}-img`}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default SearchPageBrowse;
