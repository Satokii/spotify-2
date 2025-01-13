import axios from "axios";

const getAlbum = async (token, albumId, setAlbumTracksArr, setAlbumInfo, setCopyrights) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/albums/${albumId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAlbumTracksArr(data.tracks.items);
    setCopyrights(data.copyrights)
    setAlbumInfo({
      name: data.name,
      img: data.images[0].url,
      type: data.album_type,
      releaseDate: data.release_date,
      totalTracks: data.total_tracks,
    });
};

export default getAlbum