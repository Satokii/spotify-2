import "./styles/sidebar.css"

function Sidebar({ token, currentTrack, currentTrackArtists }) {
  return (
    <div className="sidebar-outer-container grid">
      <div className="scrollbar-sidebar">
        <section className="sidebar grid">
          <SidebarCurrentTrack
            currentTrack={currentTrack}
            currentTrackArtists={currentTrackArtists}
          />
          <SidebarAboutArtist token={token} currentTrack={currentTrack} />
          <SidebarNextInQueue token={token} />
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
