"use client";

import { useEffect, useState } from "react";
import { useClient } from "@/components/ClientContext";
import { Vibrant } from "node-vibrant/browser";
import WelcomePage from "@/components/welcome-page/page";
import AlbumTopNav from "../../components/AlbumTopNav";
import getAlbum from "../../functions/getAlbum";
import getArtist from "@/app/artist/functions/getArtist";
import sleep from "@/shared-functions/sleep";
import paletteGradient from "@/palettes/paletteGradient";

import AlbumBanner from "../../components/AlbumBanner";
import AlbumControls from "../../components/AlbumControls";
import AlbumTracks from "../../components/AlbumTracks";
import AlbumMoreByArtist from "../../components/AlbumMoreByArtist";

import "../../styles/album-page.css";

function Album({ params }) {
  const { token, setToken } = useClient();

  const { albumId, artistId } = params;

  const [albumInfo, setAlbumInfo] = useState({});
  const [artistInfo, setArtistInfo] = useState({});
  const [albumTracksArr, setAlbumTracksArr] = useState([]);
  const [copyrights, setCopyrights] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [colourHex, setColourHex] = useState("#ffffff");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = albumInfo.img;

    img.onload = () => {
      const vibrant = new Vibrant(img);
      vibrant
        .getPalette()
        .then((palette) => {
          if (palette.Vibrant) {
            const colour = palette;
            setColourHex(colour);
          } else {
            console.error("No Vibrant color found in the palette.");
          }
        })
        .catch((err) => {
          console.error("Error extracting the palette:", err);
        });
    };

    img.onerror = () => {
      console.error("Error loading image");
    };
  }, [albumInfo.img]);

  useEffect(() => {
    sleep(0).then(() =>
      getAlbum(token, albumId, setAlbumTracksArr, setAlbumInfo, setCopyrights)
    );
  }, [albumId, token]);

  useEffect(() => {
    sleep(0).then(() => getArtist(token, artistId, setArtistInfo));
  }, [artistId, token]);

  useEffect(() => {
    sleep(0).then(() => paletteGradient(colourHex));
  }, [colourHex]);

  if (!token) {
    return <WelcomePage />;
  }

  return (
    <div className="scrollbar-album">
      <section className="album-page--container grid">
        <AlbumTopNav setToken={setToken} />
        <AlbumBanner
          albumInfo={albumInfo}
          artistInfo={artistInfo}
          albumTracksArr={albumTracksArr}
          artistId={artistId}
        />
        <div className="album-page--sub-container grid">
          <AlbumControls />
          <AlbumTracks
            albumTracksArr={albumTracksArr}
            albumInfo={albumInfo}
            copyrights={copyrights}
          />
          <AlbumMoreByArtist
            token={token}
            artistId={artistId}
            artistInfo={artistInfo}
            artistAlbums={artistAlbums}
            setArtistAlbums={setArtistAlbums}
          />
        </div>
      </section>
    </div>
  );
}

export default Album;
