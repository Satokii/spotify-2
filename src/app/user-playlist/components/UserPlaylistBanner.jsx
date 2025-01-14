import convertMsToTime from "../../../shared-functions/convertMsToTime";
import playlistTimeinMs from "../../playlist/functions/playlistTimeinMs";

function UserPlaylistBanner({ userPlaylistInfo, userPlaylistTracks }) {
  return (
    <div className="user-playlist--banner grid">
      <div className="user-playlist--banner-img-container">
        {userPlaylistInfo.img ? (
          <img
            className="user-playlist--img"
            src={userPlaylistInfo.img}
            alt={`${userPlaylistInfo.name}-image`}
          />
        ) : (
          <div className="user-playlist--img-none"></div>
        )}
      </div>
      <div className="user-playlist--banner-info-container grid">
        {userPlaylistInfo.isPublic ? (
          <div className="user-playlist--playlist-type">Public Playlist</div>
        ) : (
          <div className="user-playlist--playlist-type">Private Playlist</div>
        )}
        <p className="user-playlist--playlist-name">{userPlaylistInfo.name}</p>
        <p className="user-playlist--playlist-description">
          {userPlaylistInfo.description}
        </p>
        <div className="user-playlist--playlist-overview-container grid">
          <p className="user-playlist-overview-owner-name">
            {userPlaylistInfo.owner}
          </p>
          <span className="middot">&middot;</span>
          <p className="user-playlist-overview-total-tracks">{`${
            userPlaylistInfo.numSongs
          } songs, ${convertMsToTime(
            playlistTimeinMs(userPlaylistTracks)
          )}`}</p>
        </div>
      </div>
    </div>
  );
}

export default UserPlaylistBanner;
