import MainNav from "@/components/main-nav";

import "../styles/user-playlist-top-nav.css"

function UserPlaylistTopNav({ setToken }) {
  return (
    <div className="user-playlist--menu-backing">
      <section className="user-playlist--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}
export default UserPlaylistTopNav;
