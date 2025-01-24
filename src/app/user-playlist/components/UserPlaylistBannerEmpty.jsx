import Image from "next/image";

import convertMsToTime from "../../../shared-functions/convertMsToTime";
import playlistTimeinMs from "@/app/playlist/functions/playlistTimeInMs";
import MusicNote from "../../../../public/assets/svgs/main-app/music-note.svg"

import "../styles/user-playlist-banner.css";

function UserPlaylistBannerEmpty({ userPlaylistInfo, userPlaylistTracks }) {
    console.log("check", userPlaylistInfo)
  return (
    <div className="user-playlist--banner grid">
      <div className="user-playlist--banner-img-container">
        <Image className="user-playlist--img" src={MusicNote}></Image>
      </div>
      <div className="user-playlist--banner-info-container grid">
        {/* {userPlaylistInfo.isPublic ? (
          <div className="user-playlist--playlist-type">Public Playlist</div>
        ) : (
          <div className="user-playlist--playlist-type">Private Playlist</div>
        )} */}
        <div></div>
        <p className="user-playlist--playlist-name">{userPlaylistInfo.name}</p>
        <p className="user-playlist--playlist-description">
          {userPlaylistInfo.description}
        </p>
        <div className="user-playlist--playlist-overview-container grid">
          <p className="user-playlist-overview-owner-name">
            {userPlaylistInfo.owner}
          </p>
          <span className="middot">&middot;</span>
          {/* <p className="user-playlist-overview-total-tracks">{`${
            userPlaylistInfo.numSongs
          } songs, ${convertMsToTime(
            playlistTimeinMs(userPlaylistTracks)
          )}`}</p> */}
        </div>
      </div>
    </div>
  );
}

export default UserPlaylistBannerEmpty;
