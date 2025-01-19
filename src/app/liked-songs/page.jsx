"use client";

import { useEffect, useState } from "react";
import { useClient } from "@/components/ClientContext";
import { Vibrant } from "node-vibrant/browser";
import axios from "axios";
import sleep from "@/shared-functions/sleep";

import WelcomePage from "../../components/welcome-page/page";
import paletteGradientLikedSongs from "@/palettes/paletteGradientLikedSongs";
import LikedSongsImg from "../../../public/assets/images/liked-songs-img.png";
import LikedSongsTopNav from "./components/LikedSongsTopNav";
import LikedSongsBanner from "./components/LikedSongsBanner";
import LikedSongsControls from "./components/LikedSongsControls";
import LikedSongsTracks from "./components/LikedSongsTracks";

import "./styles/liked-songs.css"

function LikedSongs() {
  const { token, setToken } = useClient();
  const [likedSongsInfo, setLikedSongsInfo] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [colourHex, setColourHex] = useState("#ffffff");

  useEffect(() => {
    const getLikedSongs = async () => {
      const { data } = await axios.get(`https://api.spotify.com/v1/me/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLikedSongsInfo({ trackNum: data.total });
      setLikedSongs(data.items);
    };
    getLikedSongs();
  }, [token]);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = LikedSongsImg.blurDataURL;

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
  }, [LikedSongsImg.blurDataURL]);

  useEffect(() => {
    sleep(0).then(() => paletteGradientLikedSongs(colourHex));
  }, [colourHex]);

  if (!token) {
    return <WelcomePage />;
  }

  return (
    <div className="scrollbar-liked-songs">
      <section className="liked-songs--container grid">
        <LikedSongsTopNav setToken={setToken} />
        <LikedSongsBanner likedSongsInfo={likedSongsInfo} />
        <div className="liked-songs--sub-container grid">
          <LikedSongsControls />
          <LikedSongsTracks likedSongs={likedSongs} />
        </div>
      </section>
    </div>
  );
}

export default LikedSongs;
