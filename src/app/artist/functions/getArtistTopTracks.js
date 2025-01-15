import axios from "axios";

const getArtistTopTracks = async (token, artistId, setTopTracksArr) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
            market: 'GB'
        }
      }
    );
    setTopTracksArr(data.tracks)
  };

  export default getArtistTopTracks