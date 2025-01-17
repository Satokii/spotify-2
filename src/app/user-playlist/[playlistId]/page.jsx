"use client";

import { useEffect, useState } from "react";
import { useClient } from "@/components/ClientContext";
import { usePalette } from "react-palette";
import axios from "axios";
import sleep from "@/shared-functions/sleep";
import WelcomePage from "@/components/welcome-page/page";

import paletteGradientUserPlaylist from "@/palettes/paletteGradientUserPlaylist";
import UserPlaylistTopNav from "../components/UserPlaylistTopNav";
import UserPlaylistBanner from "../components/UserPlaylistBanner";
import UserPlaylistControls from "../components/UserPlaylistControls";
import UserPlaylistTracks from "../components/UserPlaylistTracks";

import "../styles/user-playlist.css";

function UserPlaylist({ params }) {
  const { token, setToken } = useClient();

  const { playlistId } = params;

  const [userPlaylistInfo, setUserPlaylistInfo] = useState({});
  const [userPlaylistTracks, setUserPlaylistTracks] = useState([]);

  useEffect(() => {
    const getUserPlaylistInfo = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 20,
          },
        }
      );
      setUserPlaylistInfo({
        owner: data.owner.display_name,
        name: data.name,
        img: data.images[0].url,
        description: data.description,
        numSongs: data.tracks.total,
        isPublic: data.public,
      });
    };
    getUserPlaylistInfo();
  }, [playlistId, token]);

  useEffect(() => {
    let playlistURL = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    let userPlaylistSongs = [];
    let combinedPlaylistSongs = [];
    const getUserPlaylistTracks = async () => {
      const { data } = await axios.get(playlistURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 50,
        },
      });
      userPlaylistSongs.push(data.items);
      if (data.next !== null) {
        playlistURL = data.next;
        getUserPlaylistTracks();
      } else {
        userPlaylistSongs.forEach((array) => {
          combinedPlaylistSongs = combinedPlaylistSongs.concat(array);
        });
      }
      setUserPlaylistTracks(combinedPlaylistSongs);
    };
    getUserPlaylistTracks();
  }, [playlistId, token]);

  const { data } = usePalette(userPlaylistInfo.img);
  useEffect(() => {
    sleep(0).then(() => paletteGradientUserPlaylist(data));
  }, [data]);

  if (!token) {
    return <WelcomePage />;
  }

  return (
    <div className="scrollbar-user-playlist">
      <section className="user-playlist--container grid">
        <UserPlaylistTopNav setToken={setToken} />
        <UserPlaylistBanner
          userPlaylistInfo={userPlaylistInfo}
          userPlaylistTracks={userPlaylistTracks}
        />
        <div className="user-playlist--sub-container grid">
          <UserPlaylistControls />
          <UserPlaylistTracks userPlaylistTracks={userPlaylistTracks} />
        </div>
      </section>
    </div>
  );
}

export default UserPlaylist;
