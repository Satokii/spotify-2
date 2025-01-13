import { useNavigate } from "react-router-dom";
import Logout from "@/Logout";

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
