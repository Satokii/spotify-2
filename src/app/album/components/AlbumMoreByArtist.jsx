import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import getYear from "@/shared-functions/getYear";
import fixLengthPreviews from "@/shared-functions/fixLengthPreviews.js";
import scrollToTop from "@/shared-functions/scrollToTop";
import PlayGreen from "../../../assets/svgs/main-app/main-play-btn.svg";

import "../styles/album-more.css"

function AlbumMoreByArtist({
  token,
  artistId,
  artistInfo,
  artistAlbums,
  setArtistAlbums,
}) {
  useEffect(() => {
    const getArtistAlbums = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/albums`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 9,
            include_groups: "album,single",
          },
        }
      );
      const { items } = data;
      setArtistAlbums(items);
    };
    getArtistAlbums();
  }, [artistId, setArtistAlbums, token]);

  return (
    <div className="album-page--more-by-artist grid">
      <div className="more-by-artist--header-container grid">
        <div className="more-by-artist--header">{`More by ${artistInfo.name}`}</div>
        <div className="more-by-artist--discography">See discography</div>
      </div>
      <div className="more-by-artist--album-list grid">
        {artistAlbums.map((album) => (
          <Link
            className="more-by-artist--item-container grid"
            key={album.id}
            href={`/album/${album.id}/${album.artists[0].id}`}
            onClick={scrollToTop}
          >
            <div className="more-by-artist--album-img">
              {album.images.length ? (
                <div className="more-by-artist--album-img-container">
                  <img src={album.images[0].url} alt={album.name} />
                  <Image
                    className="more-by-artist--play"
                    src={PlayGreen}
                    alt="play button"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="more-by-artist--album-name">
              {fixLengthPreviews(album.name)}
            </div>
            <div className="more-by-artist--album-date">
              {getYear(album.release_date)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AlbumMoreByArtist;
