import MainNav from "@/components/main-nav";

function TopTracksTopNav({ setToken }) {
  return (
    <div className="top-tracks-page--menu-backing">
      <section className="top-tracks-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}

export default TopTracksTopNav;
