import MainNav from "@/components/main-nav";

import "../styles/liked-songs-top-nav.css";

function LikedSongsTopNav({ setToken }) {
  return (
    <div className="liked-songs--menu-backing">
      <section className="liked-songs--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}

export default LikedSongsTopNav;
