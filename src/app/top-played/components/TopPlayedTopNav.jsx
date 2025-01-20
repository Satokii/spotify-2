import MainNav from "@/components/main-nav";

function TopPlayedTopNav() {
  return (
    <div className="top-played-page--menu-backing">
      <section className="top-played-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}

export default TopPlayedTopNav;
