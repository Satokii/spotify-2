import CurrentlyPlaying from "./dashboard-playback/CurrentlyPlaying";
import Queue from "@/components/queue";

import "../styles/dashboard-banner.css"

function DashboardBanner({ token, queue, setQueue, currentTrack, notPlaying  }) {
  return (
    <section className="dashboard--banner grid">
      <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
      <Queue token={token} queue={queue} setQueue={setQueue} />
    </section>
  );
}

export default DashboardBanner;
