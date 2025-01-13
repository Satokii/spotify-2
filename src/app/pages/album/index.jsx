import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePalette } from "react-palette";
import AlbumTopNav from "./components/AlbumTopNav";

function Album({ token, setToken }) {
  const [albumInfo, setAlbumInfo] = useState({});
  const [artistInfo, setArtistInfo] = useState({});
  const { albumId, artistId } = useParams();
  const [albumTracksArr, setAlbumTracksArr] = useState([]);
  const [copyrights, setCopyrights] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const { data } = usePalette(albumInfo.img);

  useEffect(() => {
    sleep(0).then(() =>
      getAlbum(token, albumId, setAlbumTracksArr, setAlbumInfo, setCopyrights)
    );
  }, [albumId, token]);

  useEffect(() => {
    sleep(0).then(() => getArtist(token, artistId, setArtistInfo));
  }, [artistId, token]);

  // sleep(0).then(() => dynamicGradient(albumInfo))
  useEffect(() => {
    sleep(0).then(() => palletGradient(data));
  }, [data]);

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
