import CurrentlyPlaying from "./dashboard-playback/CurrentlyPlaying";
import Queue from "@/components/queue";

function DashboardBanner({ currentTrack, notPlaying }) {
  return (
    <section className="dashboard--banner grid">
      <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
      <Queue token={token} queue={queue} setQueue={setQueue} />
    </section>
  );
}

export default DashboardBanner;
