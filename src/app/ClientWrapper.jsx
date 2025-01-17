"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ClientProvider } from "@/components/ClientContext";
import Navigation from "@/components/navigation";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import LoginPage from "./login-page/page";
import CURRENT_TRACK_INITIAL_STATE from "@/initial-states/CURRENT-TRACK-INITIAL-STATE";
import axios from "axios";

export default function ClientWrapper({ children }) {
  const [token, setToken] = useState("");
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(CURRENT_TRACK_INITIAL_STATE);
  const [currentTrackArtists, setCurrentTrackArtists] = useState([]);
  const [notPlaying, setNotPlaying] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  useEffect(() => {
    const getCurrentTrack = async () => {
      if (!token) return;
      try {
        const { data } = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!data) setNotPlaying(true);
        else {
          const { item } = data;
          setCurrentTrackArtists(item.artists);
          setCurrentTrack({
            trackId: item.id,
            albumId: item.album.id,
            artistId: item.artists[0].id,
            trackImageLength: item.album.images.length,
            trackImage: item.album.images[0].url,
            trackName: item.name,
            trackArtist: item.artists[0].name,
            trackIsPlaying: data.is_playing,
            trackProgress: data.progress_ms,
            trackDuration: item.duration_ms,
          });
        }
      } catch (error) {
        console.error("Error fetching current track:", error);
      }
    };
    getCurrentTrack();
  }, [token]);

  const contextValue = {
    token,
    setToken,
    queue,
    setQueue,
    currentTrack,
    setCurrentTrack,
    currentTrackArtists,
    setCurrentTrackArtists,
    notPlaying,
    setNotPlaying,
  };

  if (!token) {
    return (
      <LoginPage />
    )
  }

  return (
    <ClientProvider value={contextValue}>
    <div className="container grid">
      <Navigation token={token} />
      {children}
        <>
          <Sidebar
            token={token}
            currentTrack={currentTrack}
            currentTrackArtists={currentTrackArtists}
          />
          <Footer
            token={token}
            currentTrack={currentTrack}
            currentTrackArtists={currentTrackArtists}
            setCurrentTrack={setCurrentTrack}
            setQueue={setQueue}
          />
        </>
    </div>
    </ClientProvider>
  );
}
