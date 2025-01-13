import axios from "axios";

const getArtist = async (token, artistId, setArtistInfo) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setArtistInfo({
      name: data.name,
      img: data.images[0].url,
      followers: (data.followers.total).toLocaleString()
    });
};

export default getArtist

