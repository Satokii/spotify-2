import Link from "next/link";
import Image from "next/image";
import scrollToTop from "@/shared-functions/scrollToTop";
import calcTrackTime from "@/shared-functions/calcTrackTime";

import TimeIcon from "../../../../public/assets/svgs/main-app/time.svg";
import GreenHeart from "../../../../public/assets/svgs/main-app/heart-green.svg";
import MenuDots from "../../../../public/assets/svgs/main-app/menu-dots.svg";
import PlayButton from "../../../../public/assets/svgs/main-app/play-triangle.svg";

import GetSearchTrackArtists from "@/shared-functions/GetSearchTrackArtists";
import fixPlaylistAlbumName from "@/shared-functions/fixPlaylistAlbumName";
import fixPlaylistTrackName from "@/shared-functions/fixPlaylistTrackName";
import formatDateShortMths from "@/shared-functions/formatDateShortMths";

import "../styles/liked-songs-tracks.css";

function LikedSongsTracks({ likedSongs }) {
  return (
    <div className="liked-songs--tracks grid">
      <div className="liked-songs--tracks-headers grid">
        <p className="liked-tracks-header--number">#</p>
        <p className="liked-tracks-header--title">Title</p>
        <p className="liked-tracks-header--album">Album</p>
        <p className="liked-tracks-header--date-added">Date Added</p>
        <Image
          className="liked-tracks-header--time"
          src={TimeIcon}
          alt="time icon"
        />
      </div>
      <div className="liked-songs--tracks-tracks grid">
        {likedSongs.map((track, index) => (
          <div
            className="liked-songs--single-track grid"
            tabIndex={1}
            key={track.track.id}
          >
            <div className="liked-songs--track-num-container">
              <div className="liked-songs--track-number">{index + 1}</div>
              <Image
                className="liked-songs--hover-play-btn"
                src={PlayButton}
                alt="play button"
                width={20}
              />
            </div>
            {track.track.album.images.length ? (
              <img
                className="liked-songs--track-img"
                src={track.track.album.images[0].url}
                alt="album img"
              />
            ) : (
              <div></div>
            )}
            <div className="liked-songs--track-name-container grid">
              <Link
                className="liked-songs--track-name"
                href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
                onClick={scrollToTop}
              >
                {fixPlaylistTrackName(track.track.name)}
              </Link>
              <div className="liked-songs--playlist-sub-container grid">
                <div className="liked-songs--explicit-container grid">
                  {track.track.explicit ? (
                    <>
                      <p className="liked-songs--explicit-track">E</p>
                    </>
                  ) : null}
                </div>
                <div className="liked-songs--playlist-name-container grid">
                  {GetSearchTrackArtists(track.track)}
                </div>
              </div>
            </div>
            <Link
              className="liked-songs--album-name"
              href={`/album/${track.track.album.id}/${track.track.artists[0].id}`}
              onClick={scrollToTop}
            >
              {fixPlaylistAlbumName(track.track.album.name)}
            </Link>
            <div className="liked-songs--date-added">
              {formatDateShortMths(track.added_at)}
            </div>
            <Image
              className="liked-songs--like"
              src={GreenHeart}
              alt="green heart"
            />
            <div className="liked-songs--track-time">
              {calcTrackTime(track.track.duration_ms)}
            </div>
            <Image
              className="liked-songs--track-dots"
              src={MenuDots}
              alt="menu dots"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedSongsTracks;
