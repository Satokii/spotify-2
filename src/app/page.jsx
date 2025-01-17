"use client";

import { useClient } from "@/components/ClientContext";
import LoginPage from "./login-page/page";
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
      <LoginPage />
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
