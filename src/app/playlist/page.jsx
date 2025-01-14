"use client"

import { useEffect, useState } from "react";
import { usePalette } from "react-palette";
import { useRouter } from "next/navigation";
import { useClient } from "@/components/ClientContext";

import getPlaylist from "./functions/getPlaylist";
import sleep from "@/shared-functions/sleep";
import palletGradientPlaylist from "@/palettes/paletteGradientPlaylist";
import PlaylistTopNav from "./components/PlaylistTopNav";
import PlaylistBanner from "./components/PlaylistBanner";
import PlaylistControls from "./components/PlaylistControls";
// import PlaylistTracks from "./components/PlaylistTracks";

import "./styles/playlist-page.css";

function Playlist() {
  const { token, setToken } = useClient();

  const router = useRouter();
  const { playlistId } = router.query;

  const [playlistInfo, setPlaylistInfo] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    sleep(0).then(() =>
      getPlaylist(token, playlistId, setPlaylistInfo, setPlaylistTracks)
    );
  }, [playlistId, token]);

  const { data } = usePalette(playlistInfo.img);
  useEffect(() => {
    sleep(0).then(() => palletGradientPlaylist(data));
  }, [data]);

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
