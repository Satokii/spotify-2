"use client";

import { useState } from "react";

import CurrentlyPlaying from "./dashboard-playback/CurrentlyPlaying";
import Queue from "@/components/queue";
import RecentTracks from "@/components/recent-tracks";

import "../styles/dashboard-banner.css";

function DashboardBanner({ token, queue, setQueue, currentTrack, notPlaying }) {
  const [isRecent, setIsRecent] = useState(true);

  const toggleTracks = () => {
    setIsRecent((prev) => !prev);
  };

  return (
    <section className="dashboard--banner grid">
      <CurrentlyPlaying currentTrack={currentTrack} notPlaying={notPlaying} />
      <section className="dashboard--toggle-queue grid">
        <button
          className="dashboard--toggle-queue-button"
          onClick={toggleTracks}
        >
          {isRecent ? "Show Queue" : "Show Recently Played"}
        </button>
        {isRecent ? (
          <RecentTracks token={token} />
        ) : (
          <Queue token={token} queue={queue} setQueue={setQueue} />
        )}
      </section>
    </section>
  );
}

export default DashboardBanner;
