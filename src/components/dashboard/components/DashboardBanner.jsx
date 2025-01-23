import CurrentlyPlaying from "./dashboard-playback/CurrentlyPlaying";
import Queue from "@/components/queue";
import RecentTracks from "@/components/recent-tracks";

import "../styles/dashboard-banner.css"

function DashboardBanner({ token, queue, setQueue, currentTrack, notPlaying  }) {
  return (
    <section className="dashboard--banner grid">
      <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
      {/* <Queue token={token} queue={queue} setQueue={setQueue} /> */}
      <RecentTracks token={token} />
    </section>
  );
}

export default DashboardBanner;
