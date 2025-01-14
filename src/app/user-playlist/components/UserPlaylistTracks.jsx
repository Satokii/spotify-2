import Link from "next/link";
import Image from "next/image";
import scrollToTop from "../../../shared-functions/scrollToTop";

import TimeIcon from "../../../assets/svgs/main-app/time.svg";
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg";
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg";
import calcTrackTime from "../../../shared-functions/calcTrackTime";
import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg";
import GetSearchTrackArtists from "../../../shared-functions/GetSearchTrackArtists";
import fixPlaylistAlbumName from "../../../shared-functions/fixPlaylistAlbumName";
import formatDateShortMths from "../../../shared-functions/formatDateShortMths";
import fixPlaylistTrackName from "../../../shared-functions/fixPlaylistTrackName";

function UserPlaylistTracks({ userPlaylistTracks }) {
  return (
    <div className="user-playlist--tracks grid">
      <div className="user-playlist--tracks-headers grid">
        <p className="user-playlist-header--number">#</p>
        <p className="user-playlist-header--title">Title</p>
        <p className="user-playlist-header--album">Album</p>
        <p className="user-playlist-header--date-added">Date Added</p>
        <Image
          className="user-playlist-header--time"
          src={TimeIcon}
          alt="time icon"
        />
      </div>
      <div className="user-playlist--tracks-tracks grid">
        {userPlaylistTracks.map((track, index) => (
          <div
            className="user-playlist--single-track grid"
            tabIndex={1}
            key={track.track.id}
          >
            <div className="user-playlist--track-num-container">
              <div className="user-playlist--track-number">{index + 1}</div>
              <Image
                className="user-playlist--hover-play-btn"
                src={PlayButton}
                alt="play button"
                width={20}
              />
            </div>
            {track.track.album.images.length ? (
              <img
                className="user-playlist--track-img"
                src={track.track.album.images[0].url}
                alt="album img"
              />
            ) : (
              <div></div>
            )}
            <div className="user-playlist--track-name-container grid">
              <Link
                className="user-playlist--track-name"
                href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixPlaylistTrackName(track.track.name)}
              </Link>
              <div className="user-playlist--playlist-sub-container grid">
                <div className="user-playlist--explicit-container grid">
                  {track.track.explicit ? (
                    <>
                      <p className="user-playlist--explicit-track">E</p>
                    </>
                  ) : null}
                </div>
                <div className="user-playlist--playlist-name-container grid">
                  {GetSearchTrackArtists(track.track)}
                </div>
              </div>
            </div>
            <Link
              className="user-playlist--album-name"
              href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
              onClick={scrollToTop}
            >
              {fixPlaylistAlbumName(track.track.album.name)}
            </Link>
            <div className="user-playlist--date-added">
              {formatDateShortMths(track.added_at)}
            </div>
            <Image
              className="user-playlist--hide-like"
              src={GrayHeart}
              alt="gray heart"
            />
            <div className="user-playlist--track-time">
              {calcTrackTime(track.track.duration_ms)}
            </div>
            <Image
              className="user-playlist--track-dots"
              src={MenuDots}
              alt="menu dots"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPlaylistTracks;
