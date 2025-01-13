import { useNavigate } from "react-router-dom";
import Logout from "@/Logout";

import BackArrow from "../../../../assets/svgs/main-app/back-arrow.svg"
import ForwardArrow from "../../../../assets/svgs/main-app/forward-arrow.svg"
import NotificationBell from "../../../../assets/svgs/main-app/noti-bell.svg"
import ProfileIcon from "../../../../assets/svgs/main-app/profile-icon.svg"
import LogOutBtn from "../../../../assets/svgs/main-app/log-out.svg"

import "../styles/search-page-nav-content.css"

function SearchPageNavContent({
  token,
  setToken,
  setTrackResults,
  setArtistResults,
  setAlbumResults,
  setPlaylistResults,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="search-page-nav--container grid">
        <div onClick={() => navigate(-1)}>
          <img src={BackArrow} alt="back arrow" />
        </div>
        <div onClick={() => navigate(1)}>
          <img src={ForwardArrow} alt="forward arrow" />
        </div>
      </div>
      <SearchBar
        token={token}
        setTrackResults={setTrackResults}
        setArtistResults={setArtistResults}
        setAlbumResults={setAlbumResults}
        setPlaylistResults={setPlaylistResults}
      />
      <div className="search-page-nav--icons-container grid">
        <div>
          <img
            className="search-page-nav--notification-bell"
            src={NotificationBell}
            alt="notification bell"
          />
        </div>
        <div>
          <img
            className="search-page-nav--profile"
            src={ProfileIcon}
            alt="profile icon"
          />
        </div>
        <div onClick={() => Logout(setToken)}>
          <img
            className="search-page-nav--log-out"
            src={LogOutBtn}
            alt="log out button"
          />
        </div>
      </div>
    </>
  );
}

export default SearchPageNavContent;
