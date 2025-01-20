import MainNav from "@/components/main-nav";

function TopArtistsTopNav({ setToken }) {
  return (
    <div className="top-artists-page--menu-backing">
      <section className="top-artists-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}

export default TopArtistsTopNav;
