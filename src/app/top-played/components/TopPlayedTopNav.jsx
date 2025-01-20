import MainNav from "@/components/main-nav";

import "../styles/top-played-top-nav.css"

function TopPlayedTopNav({ setToken }) {
  return (
    <div className="top-played-page--menu-backing">
      <section className="top-played-page--menu-container grid">
        <MainNav setToken={setToken} />
      </section>
    </div>
  );
}

export default TopPlayedTopNav;
