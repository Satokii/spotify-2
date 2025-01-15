import axios from "axios";

const getArtistTop5Tracks = async (token, artistId, setTop5TracksArr) => {
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
    setTop5TracksArr(data.tracks.splice(0, 5))
};

export default getArtistTop5Tracks