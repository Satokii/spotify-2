import MainNav from "@/components/main-nav";

import "../styles/artist-top-nav.css";

function ArtistTopNav({ setToken }) {
  return (
    <div className="artist-page--menu-backing">
      <section className="artist-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}
export default ArtistTopNav;
