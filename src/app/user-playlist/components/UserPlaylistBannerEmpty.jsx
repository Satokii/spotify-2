import Image from "next/image";
import MusicNote from "../../../../public/assets/svgs/main-app/music-note.svg";

import "../styles/user-playlist-banner-empty.css";

function UserPlaylistBannerEmpty({ userPlaylistInfo }) {
  return (
    <div className="user-playlist--banner-empty grid">
      <div className="user-playlist--banner-empty-img-container grid">
        <Image className="user-playlist-empty--img" src={MusicNote}></Image>
      </div>
      <div className="user-playlist--banner-empty-info-container grid">
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
        </div>
      </div>
    </div>
  );
}

export default UserPlaylistBannerEmpty;
