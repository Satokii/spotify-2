"use client";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome-page";
import Dashboard from "./pages/dashboard";

import CURRENT_TRACK_INITIAL_STATE from "@/initial-states/CURRENT-TRACK-INITIAL-STATE";

import "./root.css";
import "./keyframes/fade-in.css";

export default function Home() {
  const [token, setToken] = useState("");

   //  QUEUE
   const [queue, setQueue] = useState([])

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

    // FETCH CURRENTLY PLAYING TRACK
    const [currentTrack, setCurrentTrack] = useState(CURRENT_TRACK_INITIAL_STATE);
    const [currentTrackArtists, setCurrentTrackArtists] = useState([])
    const [notPlaying, setNotPlaying] = useState(null);
  
    useEffect(() => {
      const getCurrentTrack = async () => {
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
          // console.log(data)
          setCurrentTrackArtists(item.artists)
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
      };
      // setInterval(() => {
        getCurrentTrack();
      // }, 1000);
    }, [ token]);

  return (
    <BrowserRouter>
      <div className="container grid">
        <Routes>
          <Route path="/spotify-login" element={<WelcomePage />}></Route>
          <Route path="/" element={<Dashboard token={token} queue={queue} setQueue={setQueue} setToken={setToken} currentTrack={currentTrack} notPlaying={notPlaying} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
