import { useState } from "react";
import NavMainLinks from "./components/NavMainLinks";
// import NavLibraryHeader from "./components/NavLibraryHeader";
// import NavLibraryFilter from "./components/NavLibraryFilter";
// import NavLibraryPlaylists from "./components/NavLibraryPlaylists";

import "./styles/navigation.css";

function Navigation({ token }) {
  const [showFilter, setShowFilter] = useState("Playlists");

  return (
    <section className="navigation--container grid">
      <NavMainLinks />
      {/* <div className="navigation--library-container grid">
        <NavLibraryHeader />
        <NavLibraryFilter setShowFilter={setShowFilter} />
        <NavLibraryPlaylists token={token} showFilter={showFilter} />
      </div> */}
    </section>
  );
}

export default Navigation;
