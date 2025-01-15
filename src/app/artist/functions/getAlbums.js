import axios from "axios";

const getAlbums = async (token, artistId, setAlbum) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          include_groups: 'album',
          limit: 10
        }
      }
    );
    const { items } = data
    setAlbum(items)
};

export default getAlbums