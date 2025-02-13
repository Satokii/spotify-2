import DashboardMenu from "./components/DashboardMenu";
import DashboardBanner from "./components/DashboardBanner";
import { playlistCategories } from "./playlistCategories";
import DashboardTopFeaturedPlaylists from "./components/DashboardTopFeaturedPlaylists";
import RenderDashboardPlaylists from "./components/RenderDashboardPlaylists";

import "./styles/dashboard.css";
import "./styles/dashboard-playlists.css"

function Dashboard({
  token,
  queue,
  setQueue,
  setToken,
  currentTrack,
  notPlaying,
}) {
  return (
    <div className="dashboard-outer-container grid">
      <div className="scrollbar-dashboard">
        <main className="dashboard grid">
          <DashboardMenu setToken={setToken} />
          <DashboardBanner
            token={token}
            queue={queue}
            setQueue={setQueue}
            currentTrack={currentTrack}
            notPlaying={notPlaying}
          />
          <section className="dashboard--sub-container grid">
            <DashboardTopFeaturedPlaylists />
            {playlistCategories.map((cat, index) => (
              <RenderDashboardPlaylists
                key={`${cat.category}-${index}`}
                token={token}
                category={cat.category}
                title={cat.title}
                details={cat.details}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
