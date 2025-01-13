import "../styles/album-top-nav.css"

function AlbumTopNav({ setToken }) {
  return (
    <div className="album-page--menu-backing">
      <section className="album-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}
export default AlbumTopNav;
