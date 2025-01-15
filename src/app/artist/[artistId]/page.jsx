"use client";

import { useEffect, useState } from "react";
import { useClient } from "@/components/ClientContext";
import { usePalette } from "react-palette";

import sleep from "@/shared-functions/sleep";
import getArtist from "../functions/getArtist";
import getArtistTopTracks from "../functions/getArtistTopTracks";
import getArtistTop5Tracks from "../functions/getArtistTop5Tracks";
import getAlbums from "../functions/getAlbums";
import ArtistTopNav from "../components/ArtistTopNav";
import ArtistBanner from "../components/ArtistBanner";
import ArtistControls from "../components/ArtistControls";
import ArtistPopularTracks from "../components/ArtistPopularTracks";
import ArtistDiscography from "../components/ArtistDiscography";
// import ArtistSimilarArtists from "./components/ArtistSimilarArtists";
// import ArtistAppearsOn from "./components/ArtistAppearsOn";
// import palletGradientArtist from "../../ColorThief/paletteGradientArtist";
// import getPopularReleases from "./functions/getPopularReleases";
// import getSingles from "./functions/getSingles";

// import "./styles/artist-page.css";
// import "./styles/artist-card-styling.css";

function Artist({ params }) {
  const { token, setToken } = useClient();

  const { artistId } = params;

  const [artistInfo, setArtistInfo] = useState({});
  const [topTracksArr, setTopTracksArr] = useState([]);
  const [top5TracksArr, setTop5TracksArr] = useState([]);

  const [popularReleases, setPopularReleases] = useState([]);
  const [album, setAlbum] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    sleep(0).then(() => getArtist(token, artistId, setArtistInfo));
  }, [artistId, token]);

  useEffect(() => {
    sleep(0).then(() => getArtistTopTracks(token, artistId, setTopTracksArr));
  }, [artistId, token]);

  useEffect(() => {
    sleep(0).then(() => getArtistTop5Tracks(token, artistId, setTop5TracksArr));
  }, [artistId, token]);

  useEffect(() => {
    sleep(0).then(() =>
      getPopularReleases(token, artistId, setPopularReleases)
    );
  }, [artistId, token]);

  useEffect(() => {
    sleep(0).then(() => getAlbums(token, artistId, setAlbum));
  }, [artistId, token]);

  useEffect(() => {
    sleep(0).then(() => getSingles(token, artistId, setSingle));
  }, [artistId, token]);

  const { data } = usePalette(artistInfo.img);
  useEffect(() => {
    sleep(0).then(() => palletGradientArtist(data));
  }, [data]);

  return (
    <div className="scrollbar-artist">
      <section className="artist-page--container grid">
        <ArtistTopNav setToken={setToken} />
        <ArtistBanner artistInfo={artistInfo} />
        <div className="artist-page--sub-container grid">
          <ArtistControls />
          <ArtistPopularTracks
            topTracksArr={topTracksArr}
            top5TracksArr={top5TracksArr}
          />
          <ArtistDiscography
            popularReleases={popularReleases}
            album={album}
            single={single}
          />
          <ArtistSimilarArtists token={token} artistId={artistId} />
          <ArtistAppearsOn token={token} artistId={artistId} />
        </div>
      </section>
    </div>
  );
}

export default Artist;
