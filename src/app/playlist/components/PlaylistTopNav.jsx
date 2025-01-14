import MainNav from "@/components/main-nav";

function PlaylistTopNav({ setToken }) {
  return (
    <div className="playlist-page--menu-backing">
      <section className="playlist-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}
export default PlaylistTopNav;
