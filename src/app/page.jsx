"use client";

import { useClient } from "@/components/ClientContext";
import WelcomePage from "../components/welcome-page";
import Dashboard from "@/components/dashboard";

export default function Page() {
  const {
    token,
    setToken,
    queue,
    setQueue,
    currentTrack,
    notPlaying,
  } = useClient();

  if (!token) {
    return (
      <WelcomePage />
    )
  }

  return (
    <Dashboard
      token={token}
      queue={queue}
      setQueue={setQueue}
      setToken={setToken}
      currentTrack={currentTrack}
      notPlaying={notPlaying}
    />
  );
}
