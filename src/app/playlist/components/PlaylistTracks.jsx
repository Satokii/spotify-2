import Link from "next/link";
import scrollToTop from "../../../shared-functions/scrollToTop";
import calcTrackTime from "../../../shared-functions/calcTrackTime";

import TimeIcon from "../../../assets/svgs/main-app/time.svg";
import GrayHeart from "../../../assets/svgs/main-app/heart-gray.svg";
import MenuDots from "../../../assets/svgs/main-app/menu-dots.svg";
import PlayButton from "../../../assets/svgs/main-app/play-triangle.svg";
import GetSearchTrackArtists from "../../../shared-functions/GetSearchTrackArtists";

import fixPlaylistAlbumName from "@/shared-functions/fixPlaylistAlbumName";
import fixPlaylistTrackName from "@/shared-functions/fixPlaylistTrackName";
// import formatDateShortMths from "../../../shared-functions/formatDateShortMths";

import "../styles/playlist-tracks.css";

function PlaylistTracks({ playlistTracks }) {
  const filteredTracks = playlistTracks.filter((track) => track.track !== null);

  return (
    <div className="playlist-page--tracks grid">
      <div className="playlist-page--tracks-headers grid">
        <p className="tracks-header--number">#</p>
        <p className="tracks-header--title">Title</p>
        <p className="tracks-header--album">Album</p>
        <p className="tracks-header--date-added">Date Added</p>
        <img className="tracks-header--time" src={TimeIcon} alt="time icon" />
      </div>
      <div className="playlist-page--tracks-tracks grid">
        {filteredTracks.map((track, index) => (
          <div
            className="playlist-page--single-track grid"
            tabIndex={1}
            key={track.track.id}
          >
            <div className="playlist-page--track-num-container">
              <div className="playlist-page--track-number">{index + 1}</div>
              <img
                className="playlist-page--hover-play-btn"
                src={PlayButton}
                alt="play button"
                width={20}
              />
            </div>
            {track.track.album.images.length ? (
              <img
                className="playlist-page--track-img"
                src={track.track.album.images[0].url}
                alt="album img"
              />
            ) : (
              <div></div>
            )}
            <div className="playlist-page--track-name-container grid">
              <Link
                className="playlist-page--track-name"
                href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixPlaylistTrackName(track.track.name)}
              </Link>
              <div className="playlist-page--playlist-sub-container grid">
                <div className="playlist-page--explicit-container grid">
                  {track.track.explicit ? (
                    <>
                      <p className="playlist-page--explicit-track">E</p>
                    </>
                  ) : null}
                </div>
                <div className="playlist-page--playlist-name-container grid">
                  {GetSearchTrackArtists(track.track)}
                </div>
              </div>
            </div>
            <Link
              className="playlist-page--album-name"
              href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
              onClick={scrollToTop}
            >
              {fixPlaylistAlbumName(track.track.album.name)}
            </Link>
            <div className="playlist-page--date-added">
              {formatDateShortMths(track.added_at)}
            </div>
            <img
              className="playlist-page--hide-like"
              src={GrayHeart}
              alt="gray heart"
            ></img>
            <div className="playlist-page--track-time">
              {calcTrackTime(track.track.duration_ms)}
            </div>
            <img
              className="playlist-page--track-dots"
              src={MenuDots}
              alt="menu dots"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistTracks;
