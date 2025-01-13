import Image from "next/image";
import calcTrackTime from "@/shared-functions/calcTrackTime";
import formatDate from "@/shared-functions/formatDate";
import GetAlbumTrackArtists from "@/shared-functions/GetAlbumTrackArtists";

import TimeIcon from "../../../../assets/svgs/main-app/time.svg"
import GrayHeart from "../../../../assets/svgs/main-app/heart-gray.svg";
import MenuDots from "../../../../assets/svgs/main-app/menu-dots.svg";
import PlayButton from "../../../../assets/svgs/main-app/play-triangle.svg"

import "../styles/album-tracks.css"

function AlbumTracks({ albumTracksArr, albumInfo, copyrights }) {
  return (
    <div className="album-page--tracks grid">
      <div className="album-page--tracks-headers grid">
        <p className="tracks-header--number">#</p>
        <p className="tracks-header--title">Title</p>
        <Image className="tracks-header--time" src={TimeIcon} alt="time icon" />
      </div>
      <div className="album-page--tracks-tracks grid">
        {albumTracksArr.map((track, index) => (
          <div
            className="album-page--single-track grid"
            tabIndex={1}
            key={track.id}
          >
            <div className="album-page--track-num-container">
              <div className="album-page--track-number">{index + 1}</div>
              <Image
                className="album-page--hover-play-btn"
                src={PlayButton}
                alt="play button"
                width={20}
              />
            </div>
            <div className="album-page--track-name-container grid">
              <div className="album-page--track-name">{track.name}</div>
              <div className="album-page--artist-sub-container grid">
                <div className="album-page--explicit-container grid">
                  {track.explicit ? (
                    <>
                      <p className="album-page--explicit-track">E</p>
                    </>
                  ) : null}
                </div>
                <div className="album-page--artist-name-container grid">
                  {GetAlbumTrackArtists(track)}
                </div>
              </div>
            </div>
            <Image
              className="album-page--hide-like"
              src={GrayHeart}
              alt="gray heart"
            />
            <div className="album-page--track-time">
              {calcTrackTime(track.duration_ms)}
            </div>
            <Image
              className="album-page--track-dots"
              src={MenuDots}
              alt="menu dots"
            />
          </div>
        ))}
      </div>
      <div className="album-page--date-copyright-container">
        <div className="album-page--release-date">
          {formatDate(albumInfo.releaseDate)}
        </div>
        <div className="album-page--tracks-copyrights grid">
          {copyrights.map((copyright, index) => (
            <div key={`${copyright}=${index}`}>{copyright.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumTracks;
