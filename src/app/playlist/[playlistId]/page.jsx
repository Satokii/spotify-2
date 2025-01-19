"use client"

import { useEffect, useState } from "react";
import { Vibrant } from "node-vibrant/browser";
import { useClient } from "@/components/ClientContext";

import WelcomePage from "@/components/welcome-page/page";
import getPlaylist from "../functions/getPlaylist";
import sleep from "@/shared-functions/sleep";
import paletteGradientPlaylist from "@/palettes/paletteGradientPlaylist";
import PlaylistTopNav from "../components/PlaylistTopNav";
import PlaylistBanner from "../components/PlaylistBanner";
import PlaylistControls from "../components/PlaylistControls";
import PlaylistTracks from "../components/PlaylistTracks";

import "../styles/playlist-page.css";

function Playlist({ params }) {
  const { token, setToken } = useClient();

  const { playlistId } = params;

  const [playlistInfo, setPlaylistInfo] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [colourHex, setColourHex] = useState("#ffffff");
  
    useEffect(() => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = playlistInfo.img;
  
      img.onload = () => {
        const vibrant = new Vibrant(img);
        vibrant
          .getPalette()
          .then((palette) => {
            if (palette.Vibrant) {
              const colour = palette;
              setColourHex(colour);
            } else {
              console.error("No Vibrant color found in the palette.");
            }
          })
          .catch((err) => {
            console.error("Error extracting the palette:", err);
          });
      };
  
      img.onerror = () => {
        console.error("Error loading image");
      };
    }, [playlistInfo.img]);

  useEffect(() => {
    sleep(0).then(() =>
      getPlaylist(token, playlistId, setPlaylistInfo, setPlaylistTracks)
    );
  }, [playlistId, token]);

  useEffect(() => {
    sleep(0).then(() => paletteGradientPlaylist(colourHex));
  }, [colourHex]);

  if (!token) {
    return (
      <WelcomePage />
    )
  }

  return (
    <div className="scrollbar-playlist">
      <section className="playlist-page--container grid">
        <PlaylistTopNav setToken={setToken} />
        <PlaylistBanner
          playlistInfo={playlistInfo}
          playlistTracks={playlistTracks}
        />
        <div className="playlist-page--sub-container grid">
          <PlaylistControls />
          <PlaylistTracks playlistTracks={playlistTracks} />
        </div>
      </section>
    </div>
  );
}

export default Playlist;
