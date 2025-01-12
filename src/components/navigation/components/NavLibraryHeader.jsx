function NavLibraryHeader() {
  return (
    <div className="navigation--library-header grid">
      <img
        className="navigation--library-header-icon"
        src={LibraryIcon}
        alt="library icon"
      />
      <div className="navigation--library-header-text">Your Library</div>
      <button className="navigation--library-create-playlist-btn grid">
        <img
          className="navigation--library-header-plus-icon"
          src={PlusGray}
          alt="plus icon"
        />
      </button>
    </div>
  );
}

export default NavLibraryHeader;
